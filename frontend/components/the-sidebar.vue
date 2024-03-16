<template>
  <div class="sidebar-content">
    <div class="close-icon">
      <Icon name="uiw:circle-close-o" @click="$emit('close-sidebar')" />
    </div>
    <ul class="sidebar-items">
      <li v-for="item in items" :key="item.id" class="item">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </ul>
    <ul v-if="customer.email" class="sidebar-items after-loggedIn">
      <li
        v-for="item in items2"
        :key="item.id"
        class="item"
        :class="{ 'text-danger-700': item.value == 'logout' }"
      >
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </ul>
    <ButtonLink v-else to="login" class="px-5" icon label="Sign In" />
  </div>
</template>

<script setup>
const items = [
  {
    id: 1,
    label: "About Us",
    value: "about-us",
    link: "/about-us",
  },
  {
    id: 2,
    label: "Saving Account",
    value: "saving-account",
    link: "/saving-account",
  },
  {
    id: 3,
    label: "Deposits",
    value: "deposits",
    link: "/deposits",
  },
];

const items2 = [
  {
    id: 1,
    label: "Profile",
    value: "profile",
    link: "profile",
  },
  {
    id: 2,
    label: "Transaction History",
    value: "transaction-history",
    link: "transaction-history",
  },
  {
    id: 3,
    label: "Account Settings",
    value: "account-settings",
    link: "account-settings",
  },
  {
    id: 4,
    label: "Help",
    value: "help",
    link: "help",
  },
  {
    id: 5,
    label: "Logout",
    value: "logout",
    link: "logout",
  },
];

defineEmits(["close-sidebar"]);

defineProps({
  customer: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss">
.sidebar {
  &-content {
    @apply py-5 absolute top-0 right-0 left-0 bg-white z-10 h-screen shadow-xl w-full text-primary-700 lg:hidden;
  }
  &-items {
    @apply px-5 py-6 space-y-2 border-t border-grey-300;
  }
}

.after-loggedIn {
  @apply border-t border-grey-300;
}

.close-icon {
  @apply text-right px-5 pb-5 text-grey-700 text-xl;
}
</style>
