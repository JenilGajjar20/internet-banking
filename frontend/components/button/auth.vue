<template>
  <button
    class="flex items-center justify-center bg-primary-600 text-white rounded px-4 py-2 cursor-pointer w-full hover:bg-primary-500"
  >
    <p>
      {{ label }}
      <Icon v-if="isLoading" name="uiw:loading" class="animate-spin" />
    </p>
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "Login",
  },
  icon: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss"></style>
