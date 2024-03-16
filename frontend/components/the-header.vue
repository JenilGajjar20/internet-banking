<template>
  <div class="header-section">
    <div class="container header-section__content">
      <div class="header-section__content--img">
        <img src="@/assets/img/app_logo.png" alt="nirma-bank" />
        <!-- <p>Bank of</p> -->
        <!-- <p class="text-2xl lg:text-4xl">Nirma</p> -->
      </div>
      <div class="menu-icon">
        <Icon name="uiw:menu" @click="openSidebar" />
      </div>
      <Transition name="slide-fade">
        <TheSidebar
          v-if="isOpen"
          @close-sidebar="closeSidebar"
          :customer="customer"
        />
      </Transition>

      <!-- Header List Items -->
      <ListItems />

      <div
        v-if="customer.email"
        class="header-section--user"
        @click="showDropdown"
      >
        <p>{{ customer.email }}</p>
        <Icon name="uiw:caret-down" class="" />
        <ul v-if="isDropdown" class="dropdown" v-click-outside="closeDropdown">
          <li v-for="item in dropdownItems" :key="item.id">
            <NuxtLink :to="item.link">
              {{ item.label }}
              <Icon name="uiw:arrow-right" class="ml-3" />
            </NuxtLink>
          </li>
        </ul>
      </div>
      <ButtonSolidLink
        v-else
        to="login"
        label="Log In"
        class="bg-white text-primary-700 hidden lg:block"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const customer = ref("");
const isDropdown = ref(false);
const isOpen = ref(false);

const dropdownItems = [
  {
    id: 1,
    label: "Profile",
    value: "profile",
    link: "profile",
  },
  {
    id: 2,
    label: "Transaction History",
    value: "transaction-history",
    link: "transaction-history",
  },
  {
    id: 3,
    label: "Account Settings",
    value: "account-settings",
    link: "account-settings",
  },
  {
    id: 4,
    label: "Help",
    value: "help",
    link: "help",
  },
  {
    id: 5,
    label: "Logout",
    value: "logout",
    link: "logout",
  },
];

onMounted(async () => {
  try {
    customer.value = JSON.parse(localStorage.getItem("customer-auth"));
  } catch (e) {
    console.log(e);
  }
});

const openSidebar = () => {
  isOpen.value = true;
};

const closeSidebar = () => {
  isOpen.value = false;
};

const showDropdown = () => {
  isDropdown.value = !isDropdown.value;
};

const closeDropdown = () => {
  isDropdown.value = false;
};
</script>

<style lang="scss">
.header {
  &-section {
    @apply bg-white border-b border-grey-600 py-4 relative;
    &__content {
      @apply text-grey-500 font-bold flex items-center justify-between;
      &--img {
        // @apply leading-3;
        img {
          @apply rounded-full h-14 w-14 lg:h-20 lg:w-20;
        }
      }
    }
    &--user {
      @apply hidden lg:flex lg:items-center lg:relative lg:cursor-pointer  hover:text-primary-900;
      p {
        @apply lg:mr-1;
      }
      ul.dropdown {
        @apply lg:absolute lg:bg-white lg:rounded lg:shadow-2xl lg:top-8 lg:right-0 lg:py-2 text-grey-500;
        li {
          @apply border-b border-grey-300 last:border-none py-2 px-5 whitespace-nowrap hover:text-primary-500 hover:underline;
          a {
            @apply flex items-center justify-between;
          }
        }
      }
    }
  }
}

.menu-icon {
  @apply text-black lg:hidden;
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
