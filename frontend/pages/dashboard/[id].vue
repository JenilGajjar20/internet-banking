<template>
  <div class="dashboard-section container">
    <DashboardSidebar :customer-data="customerData" />
    <div class="">main section</div>
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
    @apply py-5;
  }
}
</style>
