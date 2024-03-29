<template>
  <div class="card-section">
    <div class="card-section__content">Cards</div>
  </div>
</template>

<script setup>
defineProps({
  customers: { type: Object, default: {} },
});
</script>

<style lang="scss">
.card-section {
  @apply my-8;
}
</style>
