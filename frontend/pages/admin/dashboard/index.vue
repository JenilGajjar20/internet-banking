<template>
  <div class="admin-dashboard primary-fonts">
    <div class="admin-dashboard__content">
      <div class="admin-dashboard__sidebar">Sidebar</div>
      <div class="admin-dashboard__body">
        <div class="admin-dashboard__body--header">
          <h4>{{ adminData?.data?.username }}</h4>
          <p>{{ adminData?.data?.email }}</p>
        </div>
        <AdminCard :customers="customers" />
        <!-- <AdminList :customers="customers" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCustomers } from "@/api/customer/get-customers";

definePageMeta({
  layout: "dashboard",
});

const adminData = ref("");
const customers = ref([]);
const isLoading = ref(false);

onMounted(async () => {
  adminData.value = await JSON.parse(localStorage.getItem("admin-data"));

  const response = await getCustomers();
  isLoading.value = true;
  if (response && response.status === 200) {
    customers.value = response?.data;
    isLoading.value = false;
  }
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
  }
}
</style>
