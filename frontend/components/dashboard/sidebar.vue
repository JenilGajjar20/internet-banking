<template>
  <div class="sidebar-section">{{ customerData.data.username }}</div>
</template>

<script setup>
defineProps({
  customerData: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss">
.sidebar {
  &-section {
    @apply bg-primary-500 rounded-lg p-4 text-white;
  }
}
</style>
