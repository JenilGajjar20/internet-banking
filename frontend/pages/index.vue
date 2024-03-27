<template>
  <div class="container">
    <!-- The Hero Section -->
    <TheHero :customer-data="customer?.data" :is-token="customer?.token" />

    <!-- Our Services Section -->
    <OurServices />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const customer = ref("");

onMounted(async () => {
  try {
    customer.value = await JSON.parse(localStorage.getItem("customer-data"));
  } catch (e) {
    console.log(e);
  }
});
</script>

<style lang="scss"></style>
