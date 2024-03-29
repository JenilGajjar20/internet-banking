<template>
  <div class="admin-dashboard primary-fonts">
    <div class="admin-dashboard__content">
      <div class="admin-dashboard__sidebar">Sidebar</div>
      <div class="admin-dashboard__body">
        <div class="admin-dashboard__body--header">
          <h4>{{ adminData?.data?.username }}</h4>
          <p>{{ adminData?.data?.email }}</p>
        </div>
        <div class="cards">
          <AdminCard :customers="customers">
            <template #default>
              <div class="card-section__content">
                <div class="font-bold flex items-center justify-between gap-5">
                  <div>
                    <p class="text-info-200 text-xs">No. of</p>
                    <p class="text-xl">Customers</p>
                  </div>
                  <div class="text-4xl">
                    <p>{{ customers?.data?.length }}</p>
                  </div>
                </div>
              </div>
            </template>
          </AdminCard>
          <AdminCard :customers="customers">
            <template #default>
              <div class="card-section__content">
                <div class="font-bold flex items-center justify-between gap-5">
                  <div>
                    <p class="text-info-200 text-xs">No. of</p>
                    <p class="text-xl">Customers</p>
                  </div>
                  <div class="text-4xl">
                    <p>{{ customers?.data?.length }}</p>
                  </div>
                </div>
              </div>
            </template>
          </AdminCard>
        </div>
        <!-- <AdminList :customers="customers" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { getCustomers } from "@/api/customer/get-customers";
import checkAdminTokenExpiry from "@/mixins/admin-token";

definePageMeta({
  layout: "dashboard",
});

const router = useRouter();
const adminData = ref("");
const customers = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  // Check for the token value
  if (!checkAdminTokenExpiry.value) {
    router.push({ name: "admin-login" });
  }

  adminData.value = await JSON.parse(localStorage.getItem("admin-data"));

  const response = await getCustomers();
  isLoading.value = true;
  if (response && response.status === 200) {
    customers.value = response?.data;
    isLoading.value = false;
  }
});

const chartPercentage = computed(() => {
  return (customers?.value.data?.length / 100).toFixed(1);
});

const chartWidth = computed(() => {
  return chartPercentage + "%";
});
</script>

<style lang="scss">
.admin-dashboard {
  @apply px-4 py-8 bg-grey-200 h-screen;
  &__content {
    @apply lg:flex lg:items-center;
  }
  &__sidebar {
    @apply hidden lg:block;
  }
  &__body {
    &--header {
      @apply bg-white p-4 rounded-md shadow-xl font-bold border-2 border-primary-500;
      h4 {
        @apply text-xl text-grey-700;
      }
      p {
        @apply text-grey-500;
      }
    }
    .cards {
      @apply flex w-full overflow-auto whitespace-nowrap space-x-4;
    }
  }
}
</style>
