<template>
  <div class="admin-login">
    <div class="container">
      <div class="admin-login--form">
        <div class="admin-login--form--header">
          <h4>Welcome Admin</h4>
        </div>
        <form>
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
          <ButtonAuth label="Login" class="bg-white" />
        </form>
        <div class="admin-login--form--bottom">
          <p>Don't have account?</p>
          <ButtonLink label="register" to="register" icon />
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

const user = ref({
  email: "",
  password: "",
});

const isShow = ref(false);

const showPass = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss">
.admin {
  &-login {
    @apply bg-primary-500 flex items-center justify-center h-screen;
    &--form {
      @apply shadow-xl rounded bg-white p-6;
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
