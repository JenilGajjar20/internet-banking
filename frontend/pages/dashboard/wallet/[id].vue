<template>
  <div class="container wallet-section">
    <div class="wallet-section__content">
      <div class="wallet-section__content--header">
        <NuxtLink to="/dashboard" class="icon arrow">
          <Icon name="uiw:arrow-left" />
        </NuxtLink>
      </div>
      <div class="wallet-section__content--body">
        <div class="wallet-card">
          <div class="wallet-card__content">
            <p>Total Balance</p>
            <p>{{ walletData?.data?.balance }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getWalletByCustomerId } from "@/api/wallet/custom";
import checkTokenExpiry from "@/mixins/token";

const walletData = ref([]);
const isLoading = ref(false);
const customerData = ref({});

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

  getWalletData();
});

const getWalletData = async () => {
  const response = await getWalletByCustomerId();
  //   isLoading.value = true;
  walletData.value = response;
  //   if (response) {
  //     setTimeout(() => {
  //       isLoading.value = false;
  //     }, 2000);
  //     // message.value = response?.data;
  //   }
};
</script>

<style lang="scss">
.wallet {
  &-section {
    &__content {
      &--header {
        @apply py-4 border-b;
        .icon.arrow {
          @apply w-fit text-grey-950 bg-grey-300 rounded text-xl p-2 flex lg:hidden;
        }
      }
      &--body {
        @apply py-4;
      }
    }
  }
  &-card {
    @apply border-2 border-black rounded-md p-3;
  }
}
</style>
