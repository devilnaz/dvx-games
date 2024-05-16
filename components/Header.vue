<template>
  <div>
    <div class="wrap-container">
      <div class="header">
        <div class="header__logo">
          <span class="header__logo-title"> DVX. </span>
        </div>
        <div class="header__navigate">
          <nav class="navigate">
            <ul class="navigate__list">
              <li><a href="#" class="navigate__link"> Contact </a></li>
              <li><a href="#" class="navigate__link"> Private Policy </a></li>
              <li><a href="#" class="navigate__link"> Imprint </a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  padding: 15px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo-title {
    font: 400 40px 'Karantina';
    color: var(--blue);
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
</style>
