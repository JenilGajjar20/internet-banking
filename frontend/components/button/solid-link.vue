<template>
  <NuxtLink :to="to" class="flex items-center w-max rounded px-6 py-2">
    <p class="mr-2">{{ label }}</p>
    <Icon v-if="icon" name="uiw:arrow-right" class="text-sm" />
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: { type: String },
  to: { type: String, default: "/" },
  icon: { type: Boolean, default: false },
});
</script>

<style lang="scss"></style>
