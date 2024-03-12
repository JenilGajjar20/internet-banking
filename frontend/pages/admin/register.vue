<template>
  <div class="admin-login">
    <div class="container">
      <div class="admin-login--form">
        <div class="admin-login--form--header">
          <h4>Create Account</h4>
        </div>
        <form>
          <div class="input-field">
            <input
              type="text"
              v-model="username"
              placeholder="Enter your username"
            />
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
          <ButtonAuth label="Create Account" class="bg-white" />
        </form>
        <div class="admin-login--form--bottom">
          <p>Already have account?</p>
          <ButtonLink label="login" to="login" icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin-auth",
});

const router = useRouter();

// const notify = ref(false);
// const notifyMsg = ref("");
// const notifyStatus = ref("");
// const isLoading = ref(false);

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
.admin {
  &-login {
    @apply bg-primary-500 flex items-center justify-center h-screen;
    &--form {
      @apply shadow-xl rounded bg-white p-6  md:w-1/2 md:mx-auto lg:w-2/5;
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
      &--bottom {
        @apply flex items-center justify-between pt-6;
      }
    }
  }
}
</style>
