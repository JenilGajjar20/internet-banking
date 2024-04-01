<template>
  <div class="admin-dashboard__body--header">
    <!-- <h4>{{ adminData?.data?.username }}</h4>
      <p>{{ adminData?.data?.email }}</p> -->
    <div class="flex items-center justify-between">
      <div class="flex items-center text-sm">
        <p class="flex items-center">
          <Icon name="material-symbols:dashboard-outline-rounded" />
          <span class="ml-2">Dashboard</span>
        </p>
        <p class="ml-1">
          <span v-for="item in items" :key="item.id">
            <span v-if="itemId == 1 && item.value == 'customers'">
              / {{ item.label }}
            </span>
            <span v-else-if="itemId == 2 && item.value == 'transactions'">
              / {{ item.label }}
            </span>
            <span v-else-if="itemId == 3 && item.value == 'settings'">
              / {{ item.label }}
            </span>
            <span v-else-if="itemId == 4 && item.value == 'profile'">
              / {{ item.label }} / {{ adminData?.data?.username }}
            </span>
          </span>
        </p>
      </div>
      <div
        class="flex text-red-500 p-2 rounded-full border-2 border-red-500 cursor-pointer hover:text-white hover:bg-red-500"
      >
        <Icon name="uiw:logout" @click="logOut" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/auth";

defineProps({
  adminData: { type: [Object, String], default: {} },
  itemId: { type: Number, default: null },
  activeId: { type: Number, default: null },
  items: { type: Array, default: [] },
});

const router = useRouter();
const { logOutAdmin } = useAuthStore();

const logOut = async () => {
  await logOutAdmin();
  router.push({ name: "admin-login" });
};
</script>

<style lang="scss"></style>
