<template>
  <div>
    <div class="wrap-container">
      <div class="header">
        <div class="header__logo">
          <NuxtLink to="/" class="header__logo-link">DVX.</NuxtLink>
        </div>
        <div class="header__navigate">
          <nav class="navigate">
            <ul class="navigate__list">
              <li><NuxtLink to="contact" class="navigate__link"> Contact </NuxtLink></li>
              <li><NuxtLink to="privacy" class="navigate__link"> Private Policy </NuxtLink></li>
              <li><NuxtLink to="imprint" class="navigate__link"> Imprint </NuxtLink></li>
            </ul>
          </nav>
        </div>
        <div class="menu-burger" :status="modal_status == 'close' ? 'close' : 'open'">
          <button @click="toggle_menu" class="menu-burger__btn-open">
            <img class="menu-burger__btn-open-img" src="/img/burger.svg" alt="img: burger-menu-btn" />
          </button>
          <div class="menu-burger__container">
            <div @click.self="toggle_menu" class="menu-burger__ground"></div>
            <div class="menu-burger__body">
              <button @click="toggle_menu" class="menu-burger__btn-close"><span class="cross-line"></span><span class="cross-line"></span></button>
              <ul class="menu-burger__list">
                <li>
                  <NuxtLink @click="toggle_menu" to="/" class="menu-burger__link">Our apps</NuxtLink>
                </li>
                <li>
                  <NuxtLink @click="toggle_menu" to="contact" class="menu-burger__link">Contact</NuxtLink>
                </li>
                <li>
                  <NuxtLink @click="toggle_menu" to="privacy" class="menu-burger__link">Private Policy</NuxtLink>
                </li>
                <li>
                  <NuxtLink @click="toggle_menu" to="imprint" class="menu-burger__link">Imprint</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const modal_status = ref('close');

function toggle_menu() {
  if (modal_status.value === 'close') {
    modal_status.value = 'open';
  } else {
    modal_status.value = 'close';
  }
}
</script>

<style lang="scss" scoped>
.menu-burger {
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
  }
  &__container {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  &__btn-open {
    cursor: pointer;
  }
  &__btn-open-img {
    width: 40px;
    height: 40px;
  }
  &__ground {
    background-color: rgb(0 0 0 / 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__body {
    width: 192px;
    background-color: white;
    height: 100vh;
    padding: 48px 30px 30px;
    position: relative;
  }
  &__btn-close {
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 20px;
    & .cross-line {
      display: block;
      height: 2px;
      width: 24px;
      background-color: black;
      &:first-child {
        transform: rotate(45deg) translateY(1px);
      }
      &:last-child {
        transform: rotate(-45deg) translateY(-1px);
      }
    }
  }
  &__link {
    padding: 9px 0;
    display: block;
    color: var(--grey);
    font-size: var(--text-3-font-size);
    font-weight: 600;
    line-height: 1.5;
    border-bottom: 1px solid var(--light-grey);
  }
  &[status='open'] {
    .menu-burger__container {
      transform: translateX(0);
    }
    .menu-burger__ground {
      display: block;
    }
    .menu-burger__body {
      transform: translateX(0);
      transition: 0.4s transform ease;
    }
  }
  &[status='close'] {
    .menu-burger__container {
      transform: translateX(-100%);
      transition: 0.75s transform ease-in-out;
    }
    .menu-burger__ground {
      display: none;
    }
    .menu-burger__body {
      transform: translateX(-100%);
      transition: 0.75s transform ease-in-out;
    }
  }
}
.header {
  padding: 15px 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo-link {
    font: 400 40px 'Karantina';
    color: var(--grey);
  }
  &__navigate {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
}
.navigate {
  &__list {
    display: flex;
  }
  &__link {
    margin-left: 20px;
    font-size: var(--text-5-font-size);
    color: var(--grey);
  }
}

.router-link-exact-active {
  color: var(--blue);
}
</style>
