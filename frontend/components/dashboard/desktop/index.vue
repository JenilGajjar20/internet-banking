<template>
  <div class="px-4">
    <DashboardDesktopSidebar
      :customer-data="customerData"
      @tab-changed="handleTabChange"
    />
    <DashboardDesktopContent :customer-data="customerData" :item-id="itemId" />
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
});

const itemId = ref(null);

const handleTabChange = (data) => {
  itemId.value = data.activeId;
};
</script>

<style lang="scss"></style>
