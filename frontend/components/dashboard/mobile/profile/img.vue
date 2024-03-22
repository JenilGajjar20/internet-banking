<template>
  <img
    v-if="customerData?.profile"
    src="@/assets/img/app_logo.png"
    alt="the-image"
  />
  <!-- <img v-else src="" alt="no-image" /> -->
  <div v-else class="text-2xl p-2 rounded-full flex bg-primary-600 mr-3">
    <Icon name="mdi:account-circle" />
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss"></style>
