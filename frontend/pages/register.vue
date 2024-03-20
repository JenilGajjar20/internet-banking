<template>
  <TheAuth
    :notify="notify"
    :notify-msg="notifyMsg"
    :notify-status="notifyStatus"
  >
    <template #default>
      <div class="register-form">
        <div class="register-form--header">
          <h4>Sign Up</h4>
          <ButtonLink label="login" to="login" :icon="true" />
        </div>
        <form @submit.prevent="createAccount">
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
          <input type="checkbox" id="checkbox" v-model="role" class="hidden" />
          <ButtonAuth label="Create Account" :is-loading="isLoading" />
        </form>
      </div>
    </template>
  </TheAuth>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// import {env} from "../"

// const env = "http://localhost:3001/api/";

const router = useRouter();
// import { register } from "@/api/customer/auth";

definePageMeta({
  layout: "auth",
});

const notify = ref(false);
const notifyMsg = ref("");
const notifyStatus = ref("");
const isLoading = ref(false);

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const role = ref("customer");

const isShow = ref(false);
const isShowConf = ref(false);

const showPass = () => {
  isShow.value = !isShow.value;
};

const showConfPass = () => {
  isShowConf.value = !isShowConf.value;
};

const createAccount = async () => {
  isLoading.value = true;
  notify.value = true;
  try {
    const response = await axios.post(
      "http://localhost:3001/api/auth/register",
      {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }
    );
    console.log("response: ", response);
    if (response.status === 200) {
      notifyMsg.value = "Registered successfully!!";
      notifyStatus.value = "success";
    }
    isLoading.value = false;
    setTimeout(() => {
      notify.value = false;
      router.push({ name: "login" });
    }, 3000);
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  } catch (error) {
    console.log("error: ", error);
    if (error?.response?.status === 500) {
      notifyMsg.value = "Fields cannot be empty!!";
      notifyStatus.value = "danger";
    }
    if (error?.response?.status === 400) {
      notifyMsg.value = error.response.data.message;
      notifyStatus.value = "danger";
    }
    isLoading.value = false;
    setTimeout(() => {
      notify.value = false;
    }, 3000);
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  }
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
</style>
