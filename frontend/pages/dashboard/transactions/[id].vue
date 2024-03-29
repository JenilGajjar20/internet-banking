<template>
  <div class="container primary-fonts h-screen">
    <List
      title="Transactions"
      :c-data="customerData?.data"
      :items="transactions"
      :is-loading="isLoading"
      :error-message="message"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getTransactions } from "@/api/transaction/custom";
import checkTokenExpiry from "@/mixins/token";

const customerData = ref({});
const transactions = ref([]);
const router = useRouter();
const isLoading = ref(true);
const message = ref("");

definePageMeta({
  layout: "dashboard",
});

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
    console.log(e);
  }

  allTransactions();
});

const allTransactions = async () => {
  const response = await getTransactions();
  // console.log("response: ", response);
  isLoading.value = true;
  if (response) {
    // isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      transactions.value = response?.data;
    }, 2000);
  }
  // if (response.response && response?.response?.status == 200) {
  //   isLoading.value = false;
  //   setTimeout(() => {
  //     transactions.value = response?.data;
  //   }, 2000);
  // } else {
  //   isLoading.value = false;
  //   message.value = response?.response?.data?.message;
  // }
};
</script>
