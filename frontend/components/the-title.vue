<template>
  <h2
    v-html="label"
    class="text-3xl font-bold text-primary-700 lg:text-4xl"
  ></h2>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss"></style>
