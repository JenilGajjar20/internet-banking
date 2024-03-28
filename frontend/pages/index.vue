<template>
  <div class="container">
    <!-- The Hero Section -->
    <TheHero :customer-data="customer?.data" :is-token="isToken" />

    <!-- Our Services Section -->
    <OurServices />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import checkTokenExpiry from "@/mixins/token";

const customer = ref("");
const isToken = ref(false);

onMounted(async () => {
  try {
    customer.value = await JSON.parse(localStorage.getItem("customer-data"));
    isToken.value = checkTokenExpiry.value;
  } catch (e) {
    console.log(e);
  }
});
</script>

<style lang="scss"></style>
