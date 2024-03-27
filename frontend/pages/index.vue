<template>
  <div class="container">
    <!-- The Hero Section -->
    <TheHero :customer-data="customer?.data" :is-token="isToken" />

    <!-- Our Services Section -->
    <OurServices />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

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

const checkTokenExpiry = computed(() => {
  const token = localStorage.getItem("customer-token");
  const tokenData = JSON.parse(atob(token.split(".")[1]));
  const currentTime = Math.floor(Date.now() / 1000);
  return tokenData.exp >= currentTime;
});
</script>

<style lang="scss"></style>
