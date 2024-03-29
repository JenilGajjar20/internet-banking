<template>
  <div class="card-section">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  customers: { type: Object, default: {} },
});
</script>

<style lang="scss">
.card-section {
  @apply mt-8;
  &__content {
    @apply bg-gradient-to-r from-info-600 to-info-400 text-white rounded-md p-6;
  }
}
</style>
