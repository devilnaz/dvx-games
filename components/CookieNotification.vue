<template>
	<div v-if="visible_notification" class="notification-cookie">
		<p class="notification-cookie__desc">
			Diese Website verwendet Cookies, um die Nutzerfreundlichkeit zu
			verbessern. Durch die weitere Nutzung der Website stimmen Sie dem zu.
			Weitere Infos zu Cookies und deren Deaktivierung finden Sie
			<a class="notification-cookie__link" href="#">hier</a>.
		</p>
		<button
			@click="close_notification"
			class="notification-cookie__btn-close"
		>
			<img
				class="notification-cookie__btn-close-img"
				src="/img/close-circle.svg"
				alt="close cookie"
			/>
		</button>
	</div>
</template>

<script lang="ts" setup>
let visible_notification = ref(false)

const current_date = new Date()
const get_new_date = new Date(
	current_date.setDate(current_date.getDate() + 365)
)

const show_notif_cookie = useCookie('show-notif-cookie', {
	expires: get_new_date,
})

onMounted(() => {
	if (typeof show_notif_cookie.value === 'undefined') {
		show_notif_cookie.value = 'true'
	}
	visible_notification.value = JSON.parse(show_notif_cookie.value)
})

function close_notification() {
	show_notif_cookie.value = 'false'
	visible_notification.value = false
}
</script>

<style lang="scss">
.notification-cookie {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	max-width: 666px;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 6px 63px 7px;
	background-color: #1e2020;
	z-index: 1000;
	@media (max-width: 486px) {
		padding-left: 20px;
	}
	&__desc,
	&__link {
		font-family: 'Gotham XNarrow';
		font-weight: 400;
		font-size: 14px;
		color: #ffffff;
	}
	&__link {
		text-decoration: underline;
	}
	&__btn-close {
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
		position: absolute;
		right: 14px;
		top: 12px;
		height: 24px;
		width: 24px;
		@media (max-width: 768px) {
			padding: 10px;
			top: 2px;
			right: 4px;
			box-sizing: content-box;
		}
	}
	&__btn-close-img {
		display: block;
		width: 100%;
	}
}
</style>
