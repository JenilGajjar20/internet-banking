<template>
  <div class="footer-section">
    <div class="footer-section__content container">Footer Component</div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.footer {
  &-section {
    @apply bg-primary-800 m-4 rounded-xl text-white;
    &__content {
      @apply p-4;
    }
  }
}
</style>
