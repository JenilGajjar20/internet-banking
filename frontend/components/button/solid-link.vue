<template>
  <NuxtLink :to="to" class="bg-white text-primary-700 rounded px-6 py-2">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: { type: String },
  to: { type: String, default: "/" },
});
</script>

<style lang="scss"></style>
