<template>
  <div class="auth-section primary-fonts">
    <div class="auth-section--left">
      <img src="../assets/img/auth-image.png" alt="" />
      <div class="image-content">
        <h4>
          {{
            route.path == "/register" ? "Create your account" : "Welcome Back"
          }}
        </h4>
        <ul>
          <li>Access your account anytime, anywhere</li>
          <li>Securely manage your finances online</li>
          <li>Monitor transactions and account activity</li>
          <li>Transfer funds, pay bills, and more</li>
        </ul>
      </div>
    </div>
    <div class="auth-section--right">
      <div class="container auth-form">
        <!-- <img src="" alt="nirma-bank" /> -->
        <img src="@/assets/img/app_logo.png" alt="nirma-bank" />
        <!-- <p class="app-name">Bank of <br /><span>Nirma</span></p> -->
        <slot />
        <div class="version">
          <p>v {{ version }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { version } from "../package.json";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss">
.auth {
  &-section {
    @apply lg:flex;
    &--right {
      @apply lg:w-2/5;
    }
    &--left {
      @apply lg:w-3/5 hidden lg:block relative;
      &::before {
        @apply content-[''] absolute h-full w-full;
        background: linear-gradient(5deg, black, transparent);
      }
      img {
        @apply h-full w-full;
      }
      .image-content {
        @apply absolute left-0 top-0 px-10 flex flex-col justify-center h-screen text-white;
        h4 {
          @apply mb-4 text-5xl xl:text-6xl;
        }
        ul {
          @apply text-xl xl:text-2xl list-disc ml-10;
        }
      }
    }
  }
  &-form {
    @apply flex flex-col justify-center h-screen;
    img {
      @apply rounded-full h-24 w-24 lg:h-32 lg:w-32 mx-auto border border-black shadow-xl;
    }
    .app-name {
      @apply text-center text-lg font-bold leading-3 text-grey-600;
      span {
        @apply text-4xl text-grey-700;
      }
    }
    .version {
      @apply text-center text-xs font-bold text-grey-500;
    }
  }
}
</style>
