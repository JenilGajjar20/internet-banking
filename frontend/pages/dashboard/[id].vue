<template>
  <div class="dashboard-section container primary-fonts">
    <DashboardMobile class="lg:hidden" :customer-data="customerData" />
    <DashboardDesktop class="hidden lg:block" :customer-data="customerData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const customerData = ref("");

definePageMeta({
  layout: "dashboard",
});

const { logOutCustomer } = useAuthStore();
// const { authenticated } = storeToRefs(useAuthStore());
const router = useRouter();

onMounted(async () => {
  try {
    customerData.value = await JSON.parse(
      localStorage.getItem("customer-data")
    );
  } catch (e) {
    console.log(e);
  }
});

// const logOut = async () => {
//   await logOutCustomer();
//   router.push("/login");
// };
</script>

<style lang="scss">
.dashboard {
  &-section {
    @apply py-5 h-screen relative;
  }
}
</style>
