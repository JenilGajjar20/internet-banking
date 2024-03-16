<template>
  <div class="list-items">
    <ul>
      <li v-for="item in items" :key="item.id">
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
</script>

<style lang="scss">
.list-items {
  @apply hidden lg:block;
  ul {
    @apply flex items-center gap-6;
    li {
      @apply hover:text-primary-900;
    }
  }
}
</style>
