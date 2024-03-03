<template>
  <div
    class="flex items-center justify-center bg-primary-600 text-white rounded px-4 py-2"
  >
    <button class="">{{ label }}</button>
    <!-- <Icon name="uiw:arrow-right" /> -->
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Login",
  },
});
</script>

<style lang="scss"></style>
