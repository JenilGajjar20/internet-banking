<template>
  <div class="admin-dashboard">
    <div class="admin-dashboard__content">
      <div class="admin-dashboard__sidebar">Sidebar</div>
      <div class="admin-dashboard__body">Body</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<style lang="scss">
.admin-dashboard {
  @apply px-4 py-8;
  &__content {
    @apply flex items-center;
  }
}
</style>
