<template>
  <div class="admin-dashboard primary-fonts">
    <div class="admin-dashboard__content">
      <div class="admin-dashboard__sidebar">
        <AdminSidebar :items="items" @tab-changed="handleTabChange" />
      </div>
      <div class="admin-dashboard__body">
        <AdminHeader :admin-data="adminData" :items="items" :item-id="itemId" />
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
const ad_token = ref(null);
const customers = ref([]);
const isLoading = ref(false);
const itemId = ref(null);

onMounted(async () => {
  adminData.value = await JSON.parse(localStorage.getItem("admin-data"));
  ad_token.value = await JSON.parse(localStorage.getItem("admin-token"));

  // Check for the token value
  if (!checkAdminTokenExpiry.value && ad_token.value == null) {
    await navigateTo({ path: "/admin/login" });
  } else {
    getAllCustomers();
  }
});

const getAllCustomers = async () => {
  const response = await getCustomers();
  isLoading.value = true;
  if (response && response.status === 200) {
    customers.value = response?.data;
    isLoading.value = false;
  }
};

const handleTabChange = (data) => {
  itemId.value = data.activeId;
};

const chartPercentage = computed(() => {
  return (customers?.value.data?.length / 100).toFixed(1);
});

const chartWidth = computed(() => {
  return chartPercentage + "%";
});

const items = [
  {
    id: 1,
    label: "Customers",
    value: "customers",
    icon: "flowbite:users-group-outline",
  },
  {
    id: 2,
    label: "Transactions",
    value: "transactions",
    icon: "tdesign:undertake-transaction",
  },
  {
    id: 3,
    label: "Settings",
    value: "settings",
    icon: "uiw:setting-o",
  },
  {
    id: 4,
    label: "Profile",
    value: "profile",
    icon: "uiw:user",
  },
];
</script>

<style lang="scss">
.admin-dashboard {
  @apply bg-grey-200 p-4;
  &__content {
    @apply lg:flex;
  }
  &__sidebar {
    @apply w-1/5 hidden lg:block;
  }
  &__body {
    @apply w-full;
    &--header {
      @apply bg-white p-4 rounded-md shadow-xl font-bold;
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
