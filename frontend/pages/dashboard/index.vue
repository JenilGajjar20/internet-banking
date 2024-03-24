<template>
  <div>DashBoard</div>
</template>

<script setup>
import { ref } from "vue";

const router = useRouter();
const customerData = ref({});

onMounted(async () => {
  try {
    customerData.value = await JSON.parse(
      localStorage.getItem("customer-data")
    );
    if (customerData.value === null) {
      router.push({ name: "login" });
    }
  } catch (e) {
    console.log("error: ", e);
  }
});
</script>

<style lang="scss"></style>
