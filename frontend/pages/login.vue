<template>
  <TheAuth
    :notify="notify"
    :notify-msg="notifyMsg"
    :notify-status="notifyStatus"
  >
    <template #default>
      <div class="login-form">
        <div class="login-form--header">
          <h4>Sign In</h4>
          <ButtonLink label="register" to="register" icon />
        </div>
        <form @submit.prevent="loginAccount">
          <div class="input-field">
            <input
              type="email"
              v-model="user.email"
              placeholder="Enter your email"
            />
          </div>
          <div class="input-field relative">
            <input
              :type="!isShow ? 'password' : 'text'"
              v-model="user.password"
              placeholder="Enter your password"
            />
            <div v-show="user.password" class="show-pass" @click="showPass">
              <p>{{ !isShow ? "show" : "hide" }}</p>
            </div>
          </div>
          <ButtonAuth label="Login" :is-loading="isLoading" />
        </form>
      </div>
    </template>
  </TheAuth>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const router = useRouter();

definePageMeta({
  layout: "auth",
});

const notify = ref(false);
const notifyMsg = ref("");
const notifyStatus = ref("");
const isLoading = ref(false);

const data = ref({});

const user = ref({
  email: "",
  password: "",
});
// const email = ref("");
// const password = ref("");

const isShow = ref(false);

const showPass = () => {
  isShow.value = !isShow.value;
};

const loginAccount = async () => {
  isLoading.value = true;
  notify.value = true;

  // Authenticate User
  await authenticateUser(user.value);

  // Getting data from local storage
  data.value = await JSON.parse(localStorage.getItem("customer-data"));

  // Checking if authenticated value is 'true'
  if (authenticated.value) {
    notifyMsg.value = data?.value?.message;
    notifyStatus.value = "success";
    setTimeout(() => {
      isLoading.value = false;
      notify.value = false;
      user.value = "";
    }, 1000);
    router.push({ name: "dashboard" });
  } else {
    router.push("/login");
    user.value = "";
  }
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
