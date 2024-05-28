<template>
  <div>
    <div class="other-cover">
      <div class="wrap-container">
        <div class="other-cover__inner">
          <h1 class="other-cover__title">{{props.title}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps(['title']);

</script>

<style lang="scss" scoped>
.other-cover {
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
    height: 112px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
	 @media (max-width: 1400px) {
	 padding-left: 47px;
	 }
    @media (max-width: 576px) {
		padding-left: 36px;
    }
	 @media (max-width: 476px) {
		padding-left: 21px;
	 }
  }
  &__title {
    font-size: var(--header-4-font-size);
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>

