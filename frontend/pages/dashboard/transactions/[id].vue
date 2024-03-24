<template>
  <div class="container primary-fonts h-screen">
    <List
      title="Transactions"
      :c-id="customerData?.data?._id"
      :items="transactions"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import getAllTransactions from "@/api/transaction/custom";

const customerData = ref({});
const transactions = ref([]);
const router = useRouter();

definePageMeta({
  layout: "dashboard",
});

onMounted(async () => {
  try {
    customerData.value = await JSON.parse(
      localStorage.getItem("customer-data")
    );
  } catch (e) {
    console.log(e);
  }

  tokenExpiry();
  allTransactions();
});

const tokenExpiry = async () => {
  const token = localStorage.getItem("customer-token");

  if (token) {
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    if (tokenData.exp < currentTime) {
      await router.push({ name: "login" });
      throw new Error("Token expired");
    }
  }
};

const allTransactions = async () => {
  const response = await getAllTransactions();
  transactions.value = response?.data;
};
</script>
