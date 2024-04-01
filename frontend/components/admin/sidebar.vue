<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar__content">
      <div class="admin-sidebar__content--header">
        <!-- <p>Bank of</p>
        <p>Nirma</p> -->
        <NuxtLink to="/">
          <img
            src="@/assets/img/app_logo.png"
            alt=""
            class="h-32 shadow-xl rounded-full mx-auto"
          />
        </NuxtLink>
      </div>
      <div class="admin-sidebar__content--body">
        <div v-for="item in items" :key="item.id" class="item">
          <p
            @click="changeTab(item.id)"
            :class="activeId == item.id && isActive ? 'active' : 'hover-active'"
          >
            <Icon :name="item?.icon" class="text-xl" />
            <span>{{ item.label }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, default: [] },
});
defineEmits(["tab-changed"]);

const isActive = ref(false);
const activeId = ref(1);
const instance = getCurrentInstance();

const changeTab = (id) => {
  activeId.value = id;
  isActive.value = true;
  instance.emit("tab-changed", { activeId: activeId.value });
};

onMounted(() => {
  activeId.value = 1;
});
</script>

<style lang="scss">
.admin-sidebar {
  @apply mr-4 bg-white rounded-md h-screen;
  &__content {
    @apply px-4 py-8 relative;
    // &--header {
    //   @apply text-center border border-grey-300;
    // }
    &--body {
      @apply mt-10;
      .item {
        @apply text-base font-bold text-grey-500 mt-4 cursor-pointer;
        p {
          @apply flex items-center px-4 py-2;
          span {
            @apply ml-4;
          }
        }
        p.active {
          @apply bg-primary-800 rounded text-white;
        }
        p.hover-active:hover {
          @apply bg-primary-600 rounded text-white;
        }
      }
    }
  }
}
</style>
