/**
 * Attributes for img:
 * v-lazyload (required) = "//path_to_image.jpg"
 * lazyoffset = "20"
 * aspectratio = "1/1"
 */

let old_scroll_position = 0

const vueLazySizes = {
	async created(el, binding, vnode, prevVnode) {
		// Check if type is image
		if (vnode.type !== 'img') {
			throw new Error(
				`${vnode.type} is wrong element, use img element instead`
			)
		}

		el.classList.add('lazyload')
		// Set aspect ratio to image to keep space
		const aspect_ratio = vnode.props?.aspectratio

		if (aspect_ratio) {
			el.setAttribute('style', `aspect-ratio:${aspect_ratio}`)
		}

		const optimized_scroll_handler = throttle(scroll_handler, 200, [
			el,
			binding.value,
		])

		function scroll_handler(el, src) {
			//Disable on scroll event, if image was loaded
			if (is_element_visible(el)) {
				el.setAttribute('src', src)
				document.removeEventListener('scroll', optimized_scroll_handler, {
					passive: true,
				})
			}
		}

		function img_load_handler() {
			el.classList.add('lazyloaded')

			setTimeout(() => {
				el.classList.remove('lazyloaded')
				el.classList.remove('lazyloading')
				el.classList.remove('lazyload')
				if (!el.classList.length) {
					el.removeAttribute('class')
				}
			}, 1000)

			if (el.style) {
				el.style.removeProperty('aspect-ratio')
			}

			if (!el.style.length) {
				el.removeAttribute('style')
			}

			el.removeAttribute('aspectratio')
			el.removeAttribute('lazyoffset')

			el.removeEventListener('load', img_load_handler)
		}

		document.addEventListener('scroll', optimized_scroll_handler, {
			passive: true,
		})

		el.addEventListener('load', img_load_handler)
	},
	//Show element immediately, if it visible after page load
	mounted(el, binding) {
		el.classList.add('lazyloading')

		if (is_element_visible(el)) {
			el.setAttribute('src', binding.value)
		}
	},
}

const throttle = (func, ms, params = []) => {
	let locked = false

	return function () {
		if (locked) return

		const context = this
		const args = params

		locked = true

		setTimeout(() => {
			func.apply(context, args)
			locked = false
		}, ms)
	}
}

/**
 * @param {HTMLelement} el - img node element
 * @param {boolean} is_scrolling - if we should check offset parameter from attributes
 *
 * return Boolean
 */
function is_element_visible(el, is_scrolling = true) {
	const direction_is_bottom = is_scrolling_down()
	const direction_is_top = !direction_is_bottom

	const offset = el.getAttribute('lazyoffset') ?? 300

	const rect = el.getBoundingClientRect()
	let element_top = rect.top
	let element_bottom = rect.bottom ?? rect.bottom

	// if (direction_is_bottom && is_scrolling) {
	// }
	element_top = element_top - offset

	if (direction_is_top && is_scrolling) {
		element_bottom = element_bottom + Number(offset)
	}

	const is_visible = element_top < window.innerHeight && element_bottom > 0

	return is_visible
}

function is_scrolling_down() {
	let going_down = false

	let scroll_position = window.pageYOffset

	if (scroll_position > old_scroll_position) {
		going_down = true
	}

	old_scroll_position = scroll_position

	return going_down
}

export default defineNuxtPlugin({
	name: 'lazyload',
	enforce: 'pre', // or 'post'
	async setup(nuxtApp) {
		nuxtApp.vueApp.directive('lazyload', vueLazySizes)
	},
	hooks: {
		// You can directly register Nuxt app runtime hooks here
		'app:created'() {
			const router = useRouter()

			router.beforeEach((to, from, next) => {
				old_scroll_position = 0
				next()
			})
		},
	},
	env: {
		islands: true,
	},
})
