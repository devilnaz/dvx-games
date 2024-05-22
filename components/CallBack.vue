<template>
  <div>
    <div class="call-back">
      <div class="call-back__block">
        <div class="call-back__column">
          <div class="call-back__wrap-photo">
            <img src="/img/GettyImages.jpg" alt="photo: callback employee" class="call-back__photo" />
          </div>
          <div class="call-back__name">Anna</div>
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
  background-position: center top;
  border-radius: 10px;
  overflow: hidden;
  text-align: right;
  padding: 18px 30px 16px;
  @media (max-width: 768px) {
    text-align: center;
    }

  &__block {
    display: inline-flex;
    max-width: 440px;
    text-align: left;
    column-gap: 18px;
    @media (max-width: 576px) {
      flex-direction: column;
      row-gap: 18px;
    }
  }
  &__column-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 271px;
  }
  &__wrap-photo {
    height: 120px;
    width: 120px;
    border-radius: 4px;
    overflow: hidden;
    @media (max-width: 576px) {
      margin: 0 auto;
    }
  }
  &__photo {
    width: 100%;
    display: block;
  }
  &__name {
    font-weight: 600;
    font-size: 14px;
    color: white;
    padding-top: 8px;
    text-align: center;
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
