<template>
	<div
		v-if="is_visible"
		ref="element_notification"
		class="notification-cookie"
		@click="close_notification"
	>
		<p class="notification-cookie__desc">
			Wir verwenden Cookies, um die Nutzerfreundlichkeit zu verbessern. Durch
			die weitere Nutzung der Website stimmen Sie dem zu. Weitere Infos
			<NuxtLink to="privacypolicy" class="notification-cookie__link"
				>hier</NuxtLink
			>.
		</p>
		<button
			@click="close_notification"
			class="notification-cookie__btn-close"
		>
			<img
				class="notification-cookie__btn-close-img"
				src="/img/close-cross.svg"
				alt="close cookie"
			/>
		</button>
	</div>
</template>

<script lang="ts" setup>
let is_visible = ref(false)
const element_notification = ref(null)

const current_date = new Date()
const get_new_date = new Date(
	current_date.setDate(current_date.getDate() + 365)
)

const show_notif_cookie = useCookie('show-notif-cookie', {
	expires: get_new_date,
})

if (typeof show_notif_cookie.value === 'undefined') {
	show_notif_cookie.value = 'true'
}
is_visible.value = JSON.parse(show_notif_cookie.value)

onMounted(() => {
	if (is_visible.value === true) {
		setTimeout(() => {
			element_notification.value.classList.remove('notification-hide')
			element_notification.value.classList.add('notification-show')
		}, 500)
	}
})

function close_notification(event) {
	const checkLink = event.target.classList.contains(
		'notification-cookie__link'
	)

	if (!checkLink) {
		element_notification.value.classList.remove('notification-show')
		element_notification.value.classList.add('notification-hide')
		show_notif_cookie.value = 'false'
		setTimeout(() => {
			is_visible.value = false
		}, 1000)
	}
}
</script>

<style lang="scss">
.notification-cookie {
	transform: translateY(500%);
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	max-width: 398px;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	padding: 10px 75px 10px 15px;
	background-color: #f6f6f6;
	z-index: 1000;
	&:hover {
		cursor: pointer;
	}
	@media (max-width: 400px) {
		border-radius: 0;
	}
	@media (max-width: 374px) {
		padding: 7px 75px 7px 15px;
	}
	&__desc {
		text-align: center;
		line-height: normal;
		text-align: left;
	}
	&__desc,
	&__link {
		font-family: 'Inter';
		font-weight: 400;
		font-size: 12px;
		line-height: 14.52px;
		color: #838383;
	}
	&__link {
		text-decoration: underline;
		&:hover {
			cursor: pointer;
		}
		&:hover,
		&:active {
			color: #a5a5a5;
		}
	}
	&__btn-close {
		padding: 0;
		border: 0;
		background-color: inherit;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
		position: absolute;
		right: 25px;
		top: 50%;
		transform: translateY(-50%);
		height: 29px;
		width: 29px;
	}
	&__btn-close-img {
		display: block;
		width: 100%;
	}
}

.notification-show {
	animation: slide-top 1s forwards;
}

.notification-hide {
	animation: slide-bottom 1s forwards;
}

@keyframes slide-top {
	0% {
		transform: translateY(500%);
	}
	50% {
		transform: translateY(300%);
	}
	to {
		transform: translateY(0%);
	}
}

@keyframes slide-bottom {
	0% {
		transform: translateY(0%);
	}
	to {
		transform: translateY(500%);
	}
}
</style>
