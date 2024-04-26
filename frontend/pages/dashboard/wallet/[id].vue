<template>
  <div class="container primary-fonts wallet-section">
    <div class="wallet-section__content">
      <div class="wallet-section__content--header">
        <NuxtLink to="/dashboard" class="icon arrow">
          <Icon name="uiw:arrow-left" />
        </NuxtLink>
      </div>
      <div class="wallet-section__content--body">
        <pre>
          {{ walletData }}
        </pre>
        <div class="wallet-card">
          <div class="wallet-card__content">
            <h6>Total Balance</h6>
            <p>
              <Icon name="material-symbols:currency-rupee-rounded" />
              <span>
                {{ walletData?.data?.balance }}
              </span>
            </p>
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

<style lang="scss" scoped>
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
    &__content {
      @apply flex items-center justify-between;
      h6 {
        @apply text-lg;
      }
      p {
        @apply flex items-center text-2xl font-bold;
        span {
          @apply ml-1;
        }
      }
    }
  }
}
</style>
