<template>
  <NuxtLink
    :to="to"
    class="flex items-center text-primary-600 hover:text-primary-700 hover:underline"
  >
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
