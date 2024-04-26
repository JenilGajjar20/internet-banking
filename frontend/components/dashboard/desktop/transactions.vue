<template>
  <div class="dashboard-content__body">
    <div class="">
      <div
        class="p-4 flex items-center justify-between border-b border-gray-500"
      >
        <h4 class="text-xl font-bold text-grey-600">Transactions</h4>
        <!-- <ButtonSolidLink label="Add Transaction" icon class="text-sm" /> -->
        <button
          class="hidden lg:block bg-primary-700 text-white font-bold text-xs px-5 py-2 rounded mr-4"
        >
          <p class="flex items-center">
            <Icon class="mr-2" name="uiw:plus" />
            <span>Add</span>
          </p>
        </button>
      </div>
      <div
        v-if="transactions?.data?.data?.length > 0 && !isLoading"
        class="dashboard-content__body--content"
      >
        <table class="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>TimeStamp</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="item in transactions?.data?.data" :key="item.id">
              <td class="py-2">{{ item?._id }}</td>
              <td class="py-2">{{ item?.transactionType }}</td>
              <td class="flex items-center justify-center py-2">
                <Icon name="material-symbols:currency-rupee-rounded" />
                <p>{{ item?.amount }}</p>
              </td>
              <td class="py-2">
                {{ item?.status }}
              </td>
              <td class="py-2">{{ new Date(item.date).toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ShimmersList v-else-if="isLoading" class="px-4 pb-2" />

      <div
        v-else-if="transactions?.status === 404 || transactions?.status === 500"
        class=""
      >
        <Error :label="transactions?.data?.message" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getTransactions } from "@/api/transaction/custom";
import { onMounted, ref } from "vue";

const transactions = ref([]);
const isLoading = ref(false);
const message = ref("");

onMounted(() => {
  allTransactions();
});

const allTransactions = async () => {
  const response = await getTransactions();
  isLoading.value = true;
  if (response) {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
    transactions.value = response;
    message.value = response?.data;
  }
};
</script>

<style lang="scss"></style>
