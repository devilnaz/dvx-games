<template>
  <div>
    <div class="call-back">
      <div class="call-back__block">
        <div class="call-back__column">
          <div class="call-back__wrap-photo"><img src="/img/GettyImages.jpg" alt="photo: callback employee" class="call-back__photo" /></div>
        </div>
        <div class="call-back__column call-back__column-info">
          <p class="call-back__text">Request a call back from DVX Networks. Anna will call you back as soon as possible.</p>
          <a href="#" class="call-back__link">Request a call back</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.call-back {
  margin-top: 42px;
  background: no-repeat url('img/action.jpg');
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  text-align: right;
  padding: 18px 30px 16px;

  &__block {
    display: inline-flex;
    max-width: 440px;
    text-align: left;
    column-gap: 18px;
  }
  &__column-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__wrap-photo {
    height: 150px;
    width: 150px;
  }
  &__photo {
    width: 100%;
    display: block;
  }
  &__text {
    font-size: var(--text-4-font-size);
    font-weight: 400;
    color: white;
  }
  &__link {
    margin-top: 18px;
    font-size: var(--text-4-font-size);
    color: white;
    background-color: var(--blue);
    display: inline-block;
    width: 100%;
    text-align: center;
    border-radius: 50px;
    padding: 10px 12px 12px;
  }
}
</style>
