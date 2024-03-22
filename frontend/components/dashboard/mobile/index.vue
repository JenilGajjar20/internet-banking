<template>
  <div class="mobile">
    <DashboardMobileProfileCard :customer-data="customerData" />
    <!-- {{ customerData.data._id }} -->
    <div class="bottom-bar">
      <div class="" v-for="item in bottomItems" :key="item.id">
        <NuxtLink :to="`${item.link}`">{{ item.label }}</NuxtLink>
      </div>
    </div>
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
    link: "transactions",
  },
  {
    id: 2,
    label: "Statistics",
    value: "statistics",
    link: "statistics",
  },
  {
    id: 3,
    label: "Deposits",
    value: "deposits",
    link: "deposits",
  },
  {
    id: 4,
    label: "Settings",
    value: "settings",
    link: "settings",
  },
];
</script>

<style lang="scss">
.mobile {
  .bottom-bar {
    @apply absolute bottom-0 bg-white py-4;
  }
}
</style>
