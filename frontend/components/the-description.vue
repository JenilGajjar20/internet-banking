<template>
  <p v-html="content"></p>
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
