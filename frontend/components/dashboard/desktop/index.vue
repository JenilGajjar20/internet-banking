<template>
  <div class="px-4">
    <DashboardDesktopSidebar :customer-data="customerData" />
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
});
</script>

<style lang="scss"></style>
