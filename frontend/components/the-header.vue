<template>
  <div class="header-section">
    <div class="container header-section__content">
      <div class="header-section__content--img">
        <img src="@/assets/img/app_logo.png" alt="nirma-bank" />
      </div>
      <div class="menu-icon">
        <Icon name="uiw:menu" @click="openSidebar" />
      </div>
      <Transition name="slide-fade">
        <TheSidebar v-if="isOpen" @close-sidebar="closeSidebar" />
      </Transition>

      <!-- Header List Items -->
      <ListItems />

      <ButtonSolidLink
        to="register"
        label="Create Account"
        class="hidden lg:block"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const customer = ref("");

onMounted(async () => {
  try {
    customer.value = JSON.parse(localStorage.getItem("customer-auth"));
  } catch (e) {
    console.log(e);
  }
});

const isOpen = ref(false);

const openSidebar = () => {
  isOpen.value = true;
};

const closeSidebar = () => {
  isOpen.value = false;
};
</script>

<style lang="scss">
.header {
  &-section {
    @apply bg-primary-700 py-5 relative;
    &__content {
      @apply text-white flex items-center justify-between;
      &--img {
        img {
          @apply rounded-full h-14 w-14 lg:h-20 lg:w-20;
        }
      }
    }
  }
}

.menu-icon {
  @apply lg:hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
