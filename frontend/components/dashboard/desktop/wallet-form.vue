<template>
  <div class="absolute inset-0 p-10 bg-gray-700 bg-opacity-50">
    <div class="flex items-center justify-center h-full w-fit m-auto">
      <div class="relative bg-white rounded">
        <div class="">
          <div
            class="absolute -top-8 -right-8 bg-white rounded-full flex p-2 cursor-pointer hover:border hover:border-black"
            @click="$emit('close-form')"
          >
            <Icon name="uiw:close" />
          </div>
          <div
            class="flex items-center justify-between text-center text-xl font-bold py-4 px-6 border-b border-gray-700"
          >
            <h4>Update the Wallet Balance</h4>
            <Icon
              v-if="isVerify"
              class="ml-4 animate-spin"
              name="uiw:loading"
            />
          </div>
          <div class="px-6 py-4">
            <form>
              <div v-if="!verified" class="flex flex-col">
                <label for="email" class="mb-1 font-bold text-gray-500">
                  Your email:
                </label>
                <input
                  type="email"
                  v-model="email"
                  placeholder="example@gmail.com"
                  class="bg-gray-200 rounded px-4 py-2 focus:outline-none"
                />
              </div>
              <div v-if="verified" class="flex flex-col">
                <label for="amount" class="mb-1 font-bold text-gray-500">
                  Enter amount:
                </label>
                <input
                  type="number"
                  v-model="amount"
                  min="100"
                  max="40000"
                  placeholder="amount"
                  class="bg-gray-200 rounded px-4 py-2 focus:outline-none"
                />
              </div>
            </form>
            <div v-if="!verified" class="text-right" @click="isVerified(email)">
              <button
                class="mt-4 text-sm bg-primary-500 px-6 py-2 rounded hover:bg-primary-400"
              >
                Verify
              </button>
            </div>
            <div v-if="verified" class="text-right">
              <button
                class="mt-4 text-sm bg-primary-500 px-6 py-2 rounded hover:bg-primary-400"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import checkTokenExpiry from "@/mixins/token";

defineEmits(["close-form"]);

const email = ref("");
const amount = ref(0);
const customerData = ref({});
const isVerify = ref(false);
const verified = ref(false);

onMounted(async () => {
  try {
    customerData.value = await JSON.parse(
      localStorage.getItem("customer-data")
    );

    // Check for the token value
    if (!checkTokenExpiry.value) {
      router.push({ name: "login" });
    }
  } catch (e) {
    console.log(e);
  }
});

const isVerified = async (email) => {
  if (email === customerData?.value?.data?.email) {
    isVerify.value = true;
  } else {
    isVerify.value = false;
    verified.value = false;
  }

  setTimeout(() => {
    isVerify.value = false;
    verified.value = true;
  }, 2000);
};
</script>

<style lang="scss"></style>
