<template>
  <div>DashBoard</div>
</template>

<script setup>
import { ref } from "vue";
import checkTokenExpiry from "@/mixins/token";

const router = useRouter();
const customerData = ref({});
const isToken = ref(false);

onMounted(async () => {
  try {
    customerData.value = await JSON.parse(
      localStorage.getItem("customer-data")
    );

    // Check for the token value
    if (!checkTokenExpiry.value) {
      router.push({ name: "login" });
    }
  } catch (e) {
    console.log("error: ", e);
  }
});
</script>

<style lang="scss"></style>
