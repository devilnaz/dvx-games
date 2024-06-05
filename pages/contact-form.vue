<template>
	<div>
		<OtherCover :title="'CONTACT'" />
		<div class="wrap-container">
			<main class="main-content">
				<div class="form-container">
					<h2 class="form-container__title">Contact Form</h2>
					<p class="form-container__desc">
						If you have any inquiries about our services or are interested
						in collaborating with our brands, please feel free to contact
						us without any hesitation.
					</p>
					<form class="form" @submit="send_email">
						<div class="form-contact__row" @click="row_focus($event)">
							<fieldset
								class="form-contact__fieldset"
								aria-hidden="true"
							>
								<legend class="form-contact__legend" style="width: 0px">
									​​&ZeroWidthSpace;
								</legend>
							</fieldset>
							<div class="form-contact__box">
								<label class="form-contact__label" for="name"
									>Name</label
								>
								<input
									class="form-contact__input form-contact__field form-contact__name"
									@blur="input_blur($event)"
									@focus="input_focus($event)"
									type="text"
									name="name"
									id="name"
									required
									v-model="data_form.name"
								/>
							</div>
						</div>
						<div class="form-contact__row" @click="row_focus($event)">
							<fieldset
								class="form-contact__fieldset"
								aria-hidden="true"
							>
								<legend class="form-contact__legend" style="width: 0px">
									​​&ZeroWidthSpace;
								</legend>
							</fieldset>
							<div class="form-contact__box">
								<label class="form-contact__label" for="login"
									>E-Mail</label
								>
								<input
									class="form-contact__input form-contact__field form-contact__email"
									@blur="input_blur($event)"
									@focus="input_focus($event)"
									type="text"
									name="login"
									id="login"
									required
									v-model="data_form.email"
								/>
							</div>
						</div>
						<div class="form-contact__row" @click="row_focus($event)">
							<fieldset
								class="form-contact__fieldset"
								aria-hidden="true"
							>
								<legend class="form-contact__legend" style="width: 0px">
									​​&ZeroWidthSpace;
								</legend>
							</fieldset>
							<div class="form-contact__box">
								<label class="form-contact__label" for="message"
									>Messages</label
								>
								<textarea
								v-model="data_form.message"
								id="message"
								rows="4"
									class="form-contact__textarea form-contact__field"
									@blur="input_blur($event)"
									@focus="input_focus($event)"
									required
								/>
							</div>
						</div>

						<div class="form__row">
							<div class="wrap-checkbox">
								<input
									v-model="policy_is_accepted"
									class="checkbox"
									id="checkbox"
									type="checkbox"
									name="privacy"
								/>
								<label class="checkbox-label" for="checkbox">
									<span
										>The data you send will only be processed for the
										purpose of handling your request. For further
										information, please refer to our
										<NuxtLink
											to="/privacypolicy"
											class="checkbox-label__link"
											>privacy-policy
										</NuxtLink></span
									></label
								>
							</div>
						</div>

						<div class="form__button">
							<button type="submit">
								<div>Submit</div>
							</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: 'Contact',
})

import axios from 'axios'
import Swal from 'sweetalert2'

const policy_is_accepted = ref(false)
const initial_form = {
	name: '',
	email: '',
	message: '',
}
const data_form = ref({ ...initial_form })

function row_focus(evt) {
	input_focus(evt);
}

function input_focus(evt) {
	const row = evt.target.closest('.form-contact__row')
	const fieldset = row.querySelector('.form-contact__fieldset')
	const label = row.querySelector('.form-contact__label')
	const field = row.querySelector('.form-contact__field')

	label.classList.add('focus')
	fieldset.classList.add('focus')
	field.focus()

	const widthLabel = get_width(label)
	const legend = row.querySelector('.form-contact__legend')
	legend.style.width = `${widthLabel + 6}px`
}
function input_blur(evt) {
	const row = evt.target.closest('.form-contact__row')
	const fieldset = row.querySelector('.form-contact__fieldset')
	const label = row.querySelector('.form-contact__label')

	if (evt.target.value === '') {
		label.classList.remove('focus')
		fieldset.classList.remove('focus')

		const legend = row.querySelector('.form-contact__legend')
		legend.style.width = `0px`
	}
}

function get_width(elem) {
	const textElem = elem.textContent
	const pseudoLabel = document.createElement('label')
	pseudoLabel.className = 'form-contact__pseudo-label'
	pseudoLabel.textContent = textElem
	document.querySelector('main').append(pseudoLabel)
	const pseudoLabelWidth = pseudoLabel.getBoundingClientRect().width
	pseudoLabel.remove()
	return pseudoLabelWidth
}

async function send_email(e) {
	e.preventDefault()

	if (!policy_is_accepted.value) {
		Swal.fire('Privacy Policy', 'Please accept our privacy policy', 'warning')
		return
	}

	const formData = new FormData()

	formData.append('name', data_form.value.name)
	formData.append('email', data_form.value.email)
	formData.append('message', data_form.value.message)

	try {
		const send_email = await axios.post(
			`https://api.dvx.net/send-mail/send-mail.php`,
			formData
		)
		const server_response = send_email.data

		if (server_response === 'success') {
			Swal.fire(
				'Thank you!',
				'Your message has been sent successfully, we will contact you soon.',
				'success'
			)
		} else {
			Swal.fire('Error', server_response, 'error')
		}
	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Something went wrong, Please try again!',
		})
		return
	}

	data_form.value = initial_form
}
</script>

<style lang="scss">
.form-container {
	max-width: 600px;
	margin: 0 auto;
	border: 1px solid var(--light-grey);
	border-radius: 10px;
	padding: 20px 40px;
	@media (max-width: 476px) {
		padding: 20px 15px;
	}
	&__title {
		font-size: var(--header-3-font-size);
	}
	&__desc {
		margin-top: 20px;
		color: var(--grey);
		font-size: var(--text-5-font-size);
		font-weight: 400;
	}
}
.form {
	margin-top: 20px;
	&__row {
		margin-bottom: 15px;
		position: relative;
	}
	&__button {
		button {
			font-size: var(--text-4-font-size);
			border-radius: 10px;
			width: 100%;
			height: 50px;
			justify-content: center;
			background: var(--blue);
			color: white;
			padding: 0 0;
		}
	}
}

.wrap-checkbox {
	display: inline-flex;
	align-items: center;
}
.checkbox {
	align-self: start;
	appearance: none;
	margin-top: 1px;
	margin-right: 8px;
	flex-shrink: 0;
	flex-grow: 0;
	cursor: pointer;
	&::before {
		content: '';
		display: block;
		width: 1em;
		height: 1em;
		border: 1px solid #adb5bd;
		border-radius: 0.25em;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 50% 50%;
		transition: all 0.2s ease-out;
	}
	&:checked::before {
		border-color: #0b76ef;
		background-color: #0b76ef;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
		transition: all 0.2s ease-out;
	}
	&:focus::before {
		box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
		transition: all 0.2s ease-out;
	}
	&:focus:not(:checked)::before {
		border-color: #80bdff;
		transition: all 0.2s ease-out;
	}
}

.checkbox-label {
	user-select: none;
	color: #bfb3b3;
	font-size: 12px;
	cursor: pointer;
	&__link {
		color: #bfb3b3;
		text-decoration: underline;
	}
}

.form-contact {
	&__row {
		min-height: 45px;
		width: 100%;
		position: relative;
		margin-bottom: 15px;
		padding: 0 10px 0 20px;
		cursor: text;
	}
	&__fieldset {
		padding: 0;
		position: absolute;
		top: -9px;
		bottom: 0;
		left: 0;
		right: 0;
		border: 1px solid var(--light-grey);
		border-radius: 5px;
		padding-left: 16px;
		&.focus {
			border-color: rgba(0, 175, 240, 0.75);
		}
	}
	&__box {
		position: relative;
		display: flex;
	}
	&__label {
		font-size: 16px;
		color: #848484;
		font-weight: 400;
		position: absolute;
		left: 0;
		top: 15px;
		bottom: 0;
		height: 20px;
		line-height: 20px;
		transform-origin: left top;
		transition: transform 0.1s;
		&.focus {
			transform: translateY(-22px) scale(0.75);
			color: var(--blue);
		}
	}
	&__pseudo-label {
		transform: scale(0.75);
		font-size: 16px;
		opacity: 0;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	&__input,
	&__textarea {
		position: relative;
		border: none;
		background: inherit;
		caret-color: #0091ea;
		color: #242529;
		padding: 13px 0;
		font-size: 16px;
		line-height: 20px;
		width: 100%;
		&:focus {
			outline: 0;
		}
	}
	&__textarea {
		resize: none;
	}
}
</style>
