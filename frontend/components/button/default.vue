<template>
  <button
    class="bg-white text-primary-500 px-5 py-2 rounded hover:text-primary-900"
    @click="redirectToRegisterPage"
  >
    {{ label }}
  </button>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

console.log(route.params);

defineProps({
  label: {
    type: String,
  },
  link: { type: String, default: "/" },
});

const redirectToRegisterPage = () => {
  router.push("/register");
};
</script>

<style lang="scss"></style>
