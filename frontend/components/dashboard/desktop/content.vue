<template>
  <div class="flex items-center justify-center w-full">
    <div>Dashboard - {{ itemId }}</div>
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
  itemId: { type: Number, default: null },
});
</script>

<style lang="scss"></style>
