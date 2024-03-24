<template>
  <div class="profile-card">
    <div class="profile-card__section">
      <div class="profile-card__content">
        <DashboardMobileProfileImg :customer-data="customerData?.data" />
        <div class="profile-card__content--user">
          <p>{{ customerData?.data?.username }}</p>
          <span>{{ customerData?.data?.email }}</span>
        </div>
      </div>
      <div class="profile-card__icon">
        <Icon name="uiw:edit" />
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
</script>

<style lang="scss">
.profile {
  &-card {
    @apply bg-primary-700 rounded-lg p-4 text-white shadow-2xl;
    &__section {
      @apply flex justify-between items-center;
    }
    &__content {
      @apply flex items-center;
      img {
        @apply mr-3 rounded-full h-14 w-14;
      }
      &--user {
        p {
          @apply font-bold text-xl;
        }
        span {
          @apply font-medium text-grey-200;
        }
      }
    }
    &__icon {
      @apply bg-grey-50 p-2 text-grey-500 rounded-full flex;
    }
  }
}
</style>
