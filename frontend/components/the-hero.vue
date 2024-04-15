<template>
  <div class="hero-section">
    <div class="hero-section__content">
      <div class="box-1">
        <h1 class="hero-section__content--title">
          Empowering Your Financial Journey
        </h1>
        <TheDescription
          class="pb-8 text-xl lg:text-2xl xl:text-3xl text-grey-500"
          content="Welcome to Bank of Nirma, where banking meets convenience and security. The Internet Banking platform empowers you to take control of your finances anytime, anywhere."
        />
        <ButtonSolidLink
          :to="
            isToken && customerData ? `dashboard/${customerData._id}` : 'login'
          "
          icon
          :label="isToken && customerData ? 'View Dashboard' : 'Login'"
          class="text-sm shadow-xl lg:text-lg hover:bg-primary-600"
        />
      </div>
      <div class="box-2">
        <img src="@/assets/img/hero-img.jpg" alt="hero-img" />
        <TheDescription
          class="text-white text-sm lg:text-base"
          content="Experience secure transactions, convenient account management, and personalized financial insights."
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  customerData: {
    type: Object,
    default: () => {},
  },
  isToken: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.hero {
  &-section {
    @apply py-5 lg:py-20;
    &__content {
      @apply flex flex-col lg:flex-row;
      .box-1 {
        @apply rounded-md mb-4 lg:pr-8 lg:mb-0 lg:w-3/4;
      }
      .box-2 {
        @apply bg-gradient-to-t from-primary-700 to-primary-300 rounded-md shadow-2xl p-4 h-min md:w-1/2 md:mx-auto lg:p-6 xl:w-1/4;
        img {
          @apply rounded-md;
        }
      }
      &--title {
        @apply text-5xl font-bold text-primary-700 md:text-6xl lg:text-7xl;
      }
    }
  }
}
</style>
