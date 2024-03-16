<template>
  <div class="container">
    <!-- Hero Section -->
    <TheHero :customer="customer.email" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const customer = ref("");

onMounted(async () => {
  try {
    customer.value = await JSON.parse(localStorage.getItem("customer-auth"));
  } catch (e) {
    console.log(e);
  }
});
</script>

<style lang="scss"></style>
