<template>
  <div class="dashboard-section primary-fonts">
    <DashboardMobile class="lg:hidden" :customer-data="customerData" />
    <DashboardDesktop class="hidden lg:flex" :customer-data="customerData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import checkTokenExpiry from "@/mixins/token";
// import { Bar } from 'vue-chartjs';
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
// } from 'chart.js';

// ChartJS.register(
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// );

const customerData = ref({});
const isToken = ref(false);

definePageMeta({
  layout: "dashboard",
});

// const { authenticated } = storeToRefs(useAuthStore());
const router = useRouter();

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

<style lang="scss">
.dashboard {
  &-section {
    @apply py-5 relative bg-grey-200 h-screen;
  }
}
</style>
