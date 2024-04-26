<template>
  <div class="primary-fonts wallet-section">
    <div class="wallet-section__content">
      <div class="wallet-section__content--card">
        <div class="card-content">
          <h6>Total Balance</h6>
          <p v-if="isLoading">
            <Icon name="uiw:loading" class="animate-spin" />
          </p>
          <p v-else>
            <Icon name="material-symbols:currency-rupee-rounded" />
            <span>
              {{ walletData?.data?.balance }}
            </span>
          </p>
        </div>
        <button class="group" @click="openForm">
          <p>Update</p>
          <Icon
            name="uiw:arrow-right"
            class="transition-all duration-200 group-hover:-rotate-45 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </div>
    <DashboardDesktopWalletForm v-if="isOpen" @close-form="closeForm" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getWalletByCustomerId } from "@/api/wallet/custom";
import checkTokenExpiry from "@/mixins/token";

const walletData = ref([]);
const isLoading = ref(false);
const customerData = ref({});
const isOpen = ref(false);

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
  isLoading.value = true;
  if (response) {
    setTimeout(() => {
      isLoading.value = false;
    }, 2000);
    walletData.value = response;
  }
};

const openForm = () => {
  isOpen.value = true;
};

const closeForm = () => {
  isOpen.value = false;
};
</script>

<style lang="scss">
.wallet {
  &-section {
    &__content {
      &--card {
        @apply flex items-end bg-primary-500 text-white w-fit rounded-lg p-4;
        .card-content {
          @apply font-bold mr-8;
          h6 {
            @apply text-sm;
          }
          p {
            @apply text-4xl mt-4;
          }
        }
        button {
          @apply flex items-center underline hover:no-underline;
          p {
            @apply mr-1;
          }
        }
      }
    }
  }
}
</style>
