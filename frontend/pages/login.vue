<template>
  <TheAuth>
    <template #default>
      <div class="login-form">
        <div class="login-form--header">
          <h4>Sign In</h4>
          <ButtonLink label="register" to="register" icon />
        </div>
        <form>
          <div class="input-field">
            <input type="email" placeholder="Enter your email" />
          </div>
          <div class="input-field relative">
            <input
              :type="!isShow ? 'password' : 'text'"
              v-model="password"
              placeholder="Enter your password"
            />
            <div v-show="password" class="show-pass" @click="showPass">
              <p>{{ !isShow ? "show" : "hide" }}</p>
            </div>
          </div>
          <ButtonAuth label="Login" />
        </form>
      </div>
    </template>
  </TheAuth>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "auth",
});

const email = ref("");
const password = ref("");

const isShow = ref(false);

const showPass = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss">
.login {
  &-form {
    @apply bg-white border-2 border-primary-500 rounded shadow-xl p-6 my-7 md:w-1/2 md:mx-auto lg:w-full;
    form {
      @apply space-y-4;
      .input-field {
        input {
          @apply bg-grey-200 w-full px-4 py-2 rounded flex focus:outline-none;
        }
        p {
          @apply text-xs font-bold text-grey-500;
        }
      }
    }
    &--header {
      @apply flex items-center justify-between mb-5;
      h4 {
        @apply font-bold text-grey-600 text-2xl;
      }
    }
  }
}
</style>
