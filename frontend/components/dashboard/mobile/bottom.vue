<template>
  <div class="bottom-bar">
    <div class="bottom-bar__items" v-for="item in items" :key="item.id">
      <Icon :name="item.icon" />
      <NuxtLink
        :to="
          isToken
            ? 'login'
            : `/dashboard/${item.link}/${customerData?.data?._id}`
        "
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: [Object, String],
    default: () => {},
  },
  items: {
    type: Array,
    default: () => [],
  },
  isToken: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.mobile {
  .bottom-bar {
    @apply absolute bottom-0 left-0 right-0 bg-white py-4 flex items-center justify-center gap-2;
    &__items {
      @apply flex flex-col items-center text-grey-500 rounded py-1 px-2;
      a {
        @apply text-sm font-bold;
      }
    }
  }
}
</style>
