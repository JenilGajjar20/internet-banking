<template>
  <TheAuth>
    <template #default>
      <div class="register-form">
        <div class="register-form--header">
          <h4>Sign Up</h4>
          <ButtonLink label="login" to="login" icon />
        </div>
        <form>
          <div class="input-field">
            <input
              type="text"
              v-model="username"
              placeholder="Enter your username"
            />
            <p>username should be unique</p>
          </div>
          <div class="input-field">
            <input
              type="email"
              v-model="email"
              placeholder="Enter your email"
            />
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
          <div class="input-field relative">
            <input
              :type="!isShowConf ? 'password' : 'text'"
              v-model="confirmPassword"
              placeholder="confirm your password"
            />
            <div
              v-show="confirmPassword"
              class="show-pass"
              @click="showConfPass"
            >
              <p>{{ !isShowConf ? "show" : "hide" }}</p>
            </div>
          </div>
          <ButtonAuth label="Create Account" />
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

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isShow = ref(false);
const isShowConf = ref(false);

const showPass = () => {
  isShow.value = !isShow.value;
};

const showConfPass = () => {
  isShowConf.value = !isShowConf.value;
};
</script>

<style lang="scss">
.register {
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

.show-pass {
  @apply absolute top-3 right-2 cursor-pointer uppercase;
}
</style>
