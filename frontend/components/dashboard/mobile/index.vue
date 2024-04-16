<template>
  <div class="mobile container">
    <DashboardMobileProfileCard :customer-data="customerData" />
    <DashboardMobileBottom :customer-data="customerData" :items="bottomItems" />
    <!-- :is-token="isToken" -->
  </div>
</template>

<script setup>
// import { ref } from "vue";

// const router = useRouter();
// const isToken = ref(false);

defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
});

// onMounted(async () => {
//   tokenExpiry();
// });

// const tokenExpiry = async () => {
//   const token = localStorage.getItem("customer-token");

//   if (token) {
//     const tokenData = JSON.parse(atob(token.split(".")[1]));
//     const currentTime = Math.floor(Date.now() / 1000);

//     if (tokenData.exp < currentTime) {
//       isToken.value = true;
//       await router.push({ name: "login" });
//       throw new Error("Token expired");
//     }
//   }
// };

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
    label: "Wallet",
    value: "wallet",
    icon: "material-symbols:account-balance-wallet-outline",
    link: "wallet",
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
