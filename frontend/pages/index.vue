<template>
  <div class="container">
    <div v-for="customer in customers.data" :key="customer._id">
      {{ customer.username }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCustomers } from "../api/customer/get-customers";

const customers = ref([]);

onMounted(async () => {
  try {
    customers.value = await getCustomers();
  } catch (e) {
    console.log(e);
  }
});
</script>

<style lang="scss"></style>
