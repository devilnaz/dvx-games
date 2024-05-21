<template>
  <article class="card">
    <div class="card__inner">
      <div class="card__wrap-img">
        <img :src="'/img/company/' + props.card.img.src" alt="" class="card__img" :style="'height: ' + props.card.img.height + 'px'" />
      </div>
      <span class="card__delimetr"></span>
      <div class="card__body">
        <p class="card__desc" v-html="props.card.desc"></p>
        <div class="card__wrap-link">
          <a :href="'https://' + props.card.link" class="card__link">{{ props.card.link }}</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps(['card']);
</script>

<style lang="scss">
.card {
  border-radius: 10px;
  border: 1px solid var(--light-grey);
  transition: box-shadow 0.1s ease-out;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: box-shadow 0.15s ease-in;
  }
  &__inner {
    padding: 12px 45px 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media (max-width: 576px) {
      padding: 12px 35px 40px;
    }
  }
  &__wrap-img {
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    object-fit: contain;
  }
  &__delimetr {
    margin-top: 14px;
    display: block;
    height: 1px;
    width: 100%;
    background-color: var(--light-grey);
  }
  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__desc {
    margin-top: 18px;
    font-size: var(--text-4-font-size);
    font-weight: 400;
    color: var(--grey);
    @media (max-width: 685px) {
      max-width: 309px;
      align-self: center;
    }
    b {
      font-weight: 600;
    }
    b[color='red'] {
      color: #d43238;
    }
    b[color='blue'] {
      color: var(--blue);
    }
  }
  &__wrap-link {
    margin-top: 30px;
    text-align: center;
  }
  &__link {
    font-size: var(--text-4-font-size);
    display: inline-block;
    padding: 12px;
    width: 200px;
    background-color: var(--blue);
    color: white;
    border: 1px solid var(--light-grey);
    border-radius: 50px;
  }
}
</style>
