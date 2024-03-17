<template>
  <p v-html="content" class="pt-4"></p>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss"></style>
