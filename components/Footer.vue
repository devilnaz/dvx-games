<template>
  <div>
    <div class="wrap-container">
      <footer class="footer">
        <nav class="navigate">
          <ul class="navigate__list">
            <li><NuxtLink to="contact" class="navigate__link"> Contact </NuxtLink></li>
              <li><NuxtLink to="privacy" class="navigate__link"> Private Policy </NuxtLink></li>
              <li><NuxtLink to="imprint" class="navigate__link"> Imprint </NuxtLink></li>
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
  margin-bottom: 40px;
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
