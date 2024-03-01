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

defineEmits(["close-sidebar"]);
</script>

<style lang="scss">
.sidebar {
  &-content {
    @apply py-5 absolute top-0 right-0 left-0 bg-white z-10 h-screen shadow-xl w-full text-grey-500 lg:hidden;
  }
  &-items {
    @apply px-5 py-6 space-y-2;
    .item {
      //   @apply space-y-5;
    }
  }
}

.close-icon {
  @apply text-right px-5 text-grey-700 text-xl;
}
</style>
