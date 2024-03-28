<template>
  <div class="sidebar-section">
    <div class="sidebar-section__header">Header Content</div>
    <div class="sidebar-section__body">Body Content</div>
    <div class="sidebar-section__bottom">Bottom Content</div>
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
});
</script>

<style lang="scss">
.sidebar {
  &-section {
    @apply bg-primary-700 w-fit rounded-lg p-4 text-white;
  }
}
</style>
