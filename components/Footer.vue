<template>
  <div>
    <div class="wrap-container">
      <footer class="footer">
        <nav class="navigate">
          <ul class="navigate__list">
            <li><a href="#" class="navigate__link"> Contact </a></li>
            <li><a href="#" class="navigate__link"> Private Policy </a></li>
            <li><a href="#" class="navigate__link"> Imprint </a></li>
          </ul>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  margin-top: 25px;
}
.navigate {
  &__list {
    display: flex;
    justify-content: center;
  }
  &__link {
    margin-left: 6px;
    margin-right: 6px;
    font-size: var(--text-6-font-size);
    color: var(--grey);
  }
}
</style>
