<template>
  <div class="dashboard-content">
    <div class="dashboard-content__header">
      <div class="dashboard-content__header--left">
        dashboard
        <span v-if="itemId == 1">/ transactions</span>
        <span v-else-if="itemId == 2">/ statistics</span>
        <span v-else-if="itemId == 3">/ wallet</span>
        <span v-else-if="itemId == 4"
          >/ profile / {{ customerData?.data?.username }}</span
        >
        <span v-else-if="itemId == 5">/ settings</span>
      </div>
      <div class="dashboard-content__header--right">
        <Icon name="uiw:logout" @click="logOut" />
      </div>
    </div>
    <div v-if="itemId == null">Dashboard</div>
    <DashboardDesktopTransactions v-else-if="itemId == 1" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "~/store/auth";

// const breadcrumbText = ref("");
const router = useRouter();
const { logOutCustomer } = useAuthStore();

defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
  itemId: { type: Number, default: null },
});

// const changeText = computed(() => {
//   if (itemId.value == 1) {
//     breadcrumbText.value = "transactions";
//   }

//   return breadcrumbText.value;
// });

const logOut = async () => {
  await logOutCustomer();
  router.push("/login");
};
</script>

<style lang="scss">
.dashboard {
  &-content {
    @apply w-full h-full ml-4;
    &__header {
      @apply flex items-center justify-between bg-white rounded-xl text-sm mb-4 py-4 px-6 font-bold text-grey-500;
      &--right {
        @apply flex text-red-500 p-2 rounded-full border-2 border-red-500 cursor-pointer hover:text-white hover:bg-red-500;
      }
    }
    &__body {
      @apply bg-white rounded-xl;
      &--content {
        @apply p-4;
      }
    }
  }
}
</style>
