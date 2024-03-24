<template>
  <div class="mobile">
    <DashboardMobileProfileCard :customer-data="customerData" />
    <DashboardMobileBottom :customer-data="customerData" :items="bottomItems" />
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
});

const bottomItems = [
  {
    id: 1,
    label: "Transactions",
    value: "transactions",
    icon: "tdesign:undertake-transaction",
    link: "transactions",
  },
  {
    id: 2,
    label: "Statistics",
    value: "statistics",
    icon: "gridicons:stats",
    link: "statistics",
  },
  {
    id: 3,
    label: "Deposits",
    value: "deposits",
    icon: "mdi:bank-transfer-in",
    link: "deposits",
  },
  {
    id: 4,
    label: "Settings",
    value: "settings",
    icon: "uiw:setting",
    link: "settings",
  },
];
</script>

<style lang="scss"></style>
