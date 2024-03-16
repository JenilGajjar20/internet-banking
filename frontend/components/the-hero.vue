<template>
  <div class="hero-section">
    <div class="hero-section__content">
      <div class="box-1">
        <h1 class="hero-section__content--title">
          Empowering Your Financial Journey
        </h1>
        <TheDescription
          class="pt-4 pb-8 text-xl lg:text-3xl text-grey-500"
          content="Welcome to Bank of Nirma, where banking meets convenience and security. The Internet Banking platform empowers you to take control of your finances anytime, anywhere."
        />
        <ButtonSolidLink
          :to="customer ? 'dashboard' : 'login'"
          icon
          :label="customer ? 'View Dashboard' : 'Login'"
          class="bg-primary-700 text-white text-lg shadow-xl hover:bg-primary-600"
        />
      </div>
      <div class="box-2">
        <img src="@/assets/img/hero-img.jpg" alt="hero-img" />
        <TheDescription
          class="pt-4 text-white text-xl"
          content="Experience secure transactions, convenient account management, and personalized financial insights."
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  customer: {
    type: String,
    default: () => "",
  },
});
</script>

<style lang="scss">
.hero {
  &-section {
    @apply my-5 lg:my-20;
    &__content {
      @apply flex flex-col lg:flex-row;
      .box-1 {
        @apply p-4 rounded-md mb-4 lg:p-8 lg:mb-0 lg:mr-4 lg:w-3/4;
      }
      .box-2 {
        @apply bg-gradient-to-t from-primary-700 to-primary-300 rounded-md shadow-2xl p-4 lg:p-6 lg:w-1/4;
        img {
          @apply rounded-md;
        }
      }
      &--title {
        @apply text-5xl font-bold text-primary-700 lg:text-7xl;
      }
    }
  }
}
</style>
