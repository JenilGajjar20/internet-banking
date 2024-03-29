<template>
  <div>
    {{ customers }}
  </div>
</template>

<script setup>
defineProps({
  customers: { type: Object, default: {} },
});
</script>

<style lang="scss"></style>
