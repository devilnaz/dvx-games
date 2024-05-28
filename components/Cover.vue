<template>
  <div>
    <div class="main-cover">
      <div class="wrap-container">
        <div class="main-cover__inner">
          <h1 class="main-cover__title">DVX.</h1>
          <h2 class="main-cover__desc">Discover DVX projects</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.main-cover {
  // max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background-image: url(/img/bar.jpg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  @media (max-width: 1920px) {
    max-width: 1920px;
    background-size: auto;
  }
  &__inner {
    height: 377px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
	 @media (max-width: 1400px) {
	 padding-left: 47px;
	 }
    @media (max-width: 576px) {
      height: 277px;
		padding-left: 36px;
    }
	 @media (max-width: 476px) {
		padding-left: 21px;
	 }
  }
  &__title {
    font-family: var(--logo-font-family);
    font-size: 64px;
    font-weight: 400;
  }
  &__desc {
    font-size: var(--header-2-font-size);
	 @media (max-width: 476px) {
		font-size: var(--header-4-font-size);
	 }
  }
}
</style>
