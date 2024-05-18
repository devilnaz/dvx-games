<template>
  <div>
    <OtherCover :title="'CONTACT'" />
    <div class="wrap-container">
      <main class="main-content">
        <div class="form-container">
          <h1 class="form-container__title">Contact Form</h1>
          <p class="form-container__desc">
            If you have any inquiries about our services or are interested in collaborating with our brands, please feel free to contact us without any
            hesitation.
          </p>
          <form class="form" @submit="send_email">
            <div class="form__row">
              <input v-model="data_form.name" type="text" id="name" class="form__input" placeholder="Name" required />
            </div>
            <div class="form__row">
              <input v-model="data_form.email" type="email" id="email" class="form__input" placeholder="E-mail" required />
            </div>
            <div class="form__row">
              <textarea v-model="data_form.message" id="message" rows="4" class="form__textarea" placeholder="Messages" required />
            </div>

            <div class="form__row">
              <input v-model="policy_is_accepted" class="checkbox" id="checkbox" type="checkbox" name="privacy" />
              <label class="checkbox-label" for="checkbox">
                <span
                  >The data you send will only be processed for the purpose of handling your request. For further information, please refer to our
                  <NuxtLink to="/privacy" class="checkbox-label__link">privacy-policy </NuxtLink></span
                ></label
              >
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
import axios from 'axios';
import Swal from 'sweetalert2';

const policy_is_accepted = ref(false);
const initial_form = {
  name: '',
  email: '',
  message: '',
};
const data_form = ref({ ...initial_form });

async function send_email(e) {
  e.preventDefault();

  if (!policy_is_accepted.value) {
    Swal.fire('Privacy Policy', 'Please accept our privacy policy', 'warning');
    return;
  }

  const formData = new FormData();

  formData.append('name', data_form.value.name);
  formData.append('email', data_form.value.email);
  formData.append('message', data_form.value.message);

  try {
    const send_email = await axios.post(`https://api.dvx.net/send-mail/send-mail.php`, formData);
    const server_response = send_email.data;

    if (server_response === 'success') {
      Swal.fire('Thank you!', 'Your message has been sent successfully, we will contact you soon.', 'success');
    } else {
      Swal.fire('Error', server_response, 'error');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong, Please try again!',
    });
    return;
  }

  data_form.value = initial_form;
}
</script>

<style lang="scss">
.form-container {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--light-grey);
  border-radius: 10px;
  padding: 20px 40px;
  &__desc {
    margin-top: 20px;
    color: var(--grey);
    font-size: var(--text-4-font-size);
  }
}
.form {
  margin-top: 20px;
  &__row {
    margin-bottom: 15px;
  }
  &__input,
  &__textarea {
    width: 100%;
    display: block;
    font-size: 18px;
    border: 1px solid var(--light-grey);
    border-radius: 5px;
  }
  &__input {
    height: 45px;
    padding: 0 10px 0 20px;
  }
  &__textarea {
    padding: 10px 10px 10px 20px;
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
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox-label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  color: #bfb3b3;
  font-size: 14px;
  &__link {
    color: #bfb3b3;
    text-decoration: underline;
  }
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 8px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
}
.checkbox:checked + .checkbox-label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.checkbox:focus + .checkbox-label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.checkbox:focus:not(:checked) + .checkbox-label::before {
  border-color: #80bdff;
}
</style>
