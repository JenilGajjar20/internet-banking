<template>
  <button
    class="flex items-center justify-center rounded px-4 py-2 cursor-pointer w-full bg-primary-500 text-white hover:bg-primary-700"
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
  bgColor: {
    type: String,
    default: "",
  },
  textColor: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss"></style>
