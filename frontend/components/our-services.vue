<template>
  <div class="services-section">
    <div class="services-section__content">
      <div class="services-section__content--left">
        <TheTitle label="Our Services" />
        <TheDescription
          content="Discover a comprehensive range of banking services designed to simplify your financial life and empower you to achieve your goals."
          class="lg:text-xl"
        />
        <ButtonSolidLink
          label="Learn More"
          to="services"
          icon
          class="hidden mt-4 text-sm shadow-xl hover:bg-primary-600 lg:flex"
        />
      </div>
      <div class="services-section__content--right">
        <div v-for="service in services" :key="service.id" class="service">
          <div class="service-text">
            <Icon :name="service.icon" class="icon" />
            <h4>{{ service.label }}</h4>
          </div>
          <p>{{ service.text }}</p>
        </div>
      </div>
      <ButtonSolidLink
        label="Learn More"
        to="services"
        icon
        class="mt-4 mx-auto text-sm shadow-xl hover:bg-primary-600 lg:hidden"
      />
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    id: 1,
    icon: "fluent:savings-16-regular",
    label: "Savings Accounts",
    text: "Start saving for your goals with our range of savings accounts. Benefit from competitive interest rates, automatic transfers, and tools to track your progress towards financial milestones.",
  },
  {
    id: 2,
    icon: "streamline:money-cash-bag-dollar-bag-payment-cash-money-finance",
    label: "Loan and Mortgage",
    text: "Whether you're buying a home, financing a car, or need a personal loan, we offer flexible loan options with competitive rates and repayment terms. Our mortgage experts are here to guide you through the home buying process.",
  },
  {
    id: 3,
    icon: "iconoir:credit-cards",
    label: "Credit Cards",
    text: "Choose from a variety of credit cards tailored to your spending habits and lifestyle. Enjoy rewards, cashback, and security features for convenient and secure transactions.",
  },
  {
    id: 4,
    icon: "mdi:bank",
    label: "Online Banking",
    text: "Manage your accounts anytime, anywhere with our secure online banking. View balances, transfer funds, pay bills, set up alerts, and monitor transactions with ease.",
  },
];
</script>

<style lang="scss">
.services {
  &-section {
    @apply py-5;
    &__content {
      @apply flex flex-col lg:flex-row;
      &--left {
        @apply pb-6 lg:pb-0 lg:pr-10 lg:w-2/5;
      }
      &--right {
        @apply grid lg:grid-cols-2 gap-5 lg:w-3/5;
        .service {
          &-text {
            @apply flex items-center pb-2;
            .icon {
              @apply mr-3 text-primary-900 text-2xl;
            }
            h4 {
              @apply text-grey-900 font-bold;
            }
          }
          p {
            @apply text-grey-700;
          }
        }
      }
    }
  }
}
</style>
