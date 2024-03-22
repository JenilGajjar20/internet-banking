<template>
  <div class="sidebar-section">
    <pre>
      {{ customerData }}
    </pre>
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
    // @apply bg-primary-700 rounded-lg p-4 text-white;
  }
}
</style>
