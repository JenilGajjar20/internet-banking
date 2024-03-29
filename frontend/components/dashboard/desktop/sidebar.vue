<template>
  <div class="sidebar-section">
    <div class="sidebar-section__header">
      <NuxtLink to="/">
        <img
          src="@/assets/img/app_logo.png"
          alt=""
          class="h-20 shadow-xl rounded-full"
        />
      </NuxtLink>
    </div>
    <div class="sidebar-section__body">
      <div v-for="item in sidebarItems" :key="item.id" class="item">
        <p
          @click="changeTab(item.id)"
          :class="activeId == item.id && isActive ? 'active' : 'hover-active'"
        >
          <Icon :name="item.icon" class="text-2xl" />
          <span class="text-xs">{{ item.label }}</span>
        </p>
      </div>
    </div>
    <!-- <div class="sidebar-section__bottom">Bottom Content</div> -->
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";

defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
});

defineEmits(["tab-changed"]);

const isActive = ref(false);
const activeId = ref(1);
const instance = getCurrentInstance();

const changeTab = (id) => {
  activeId.value = id;
  isActive.value = true;
  instance.emit("tab-changed", { activeId: activeId.value });
};

onMounted(() => {
  activeId.value = 1;
});

const sidebarItems = [
  {
    id: 1,
    label: "Transactions",
    icon: "tdesign:undertake-transaction",
    link: "transactions",
  },
  {
    id: 2,
    label: "Statistics",
    icon: "gridicons:stats",
    link: "statistics",
  },
  {
    id: 3,
    label: "Wallet",
    icon: "material-symbols:account-balance-wallet-outline",
    link: "wallet",
  },
  {
    id: 4,
    label: "profile",
    icon: "uiw:user",
    link: "profile",
  },
  {
    id: 5,
    label: "Settings",
    icon: "uiw:setting-o",
    link: "settings",
  },
];
</script>

<style lang="scss">
.sidebar {
  &-section {
    @apply flex flex-col items-center gap-5;
    &__body {
      @apply relative bg-white w-fit rounded-lg px-4 py-8 text-primary-500 space-y-8;
      .item {
        p {
          @apply flex flex-col items-center gap-2 font-bold cursor-pointer;
        }
        p.active::before {
          @apply content-[''] absolute bg-primary-800 h-10 w-2 left-0 rounded-tr-full rounded-br-full;
        }
        p.hover-active:hover::before {
          @apply content-[''] absolute bg-primary-400 h-10 w-2 left-0 rounded-tr-full rounded-br-full;
        }
      }
    }
  }
}
</style>
