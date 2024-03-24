<template>
  <div class="list-section">
    <div class="list-section__content">
      <div class="list-section__content--header">
        <NuxtLink :to="`/dashboard/${cId}`" class="icon">
          <Icon name="uiw:arrow-left" />
        </NuxtLink>
        <h4>{{ title }}</h4>
      </div>
      <div v-if="items.length != 0" class="list-section__content--body">
        <div v-for="item in items" :key="item._id" class="item-content">
          <!-- @click="openDetail(item._id)" -->
          <div class="item item-content--top">
            <p class="item-id">{{ item._id }}</p>
            <p class="item-price">
              <Icon name="material-symbols:currency-rupee-rounded" />
              <span>{{ item.amount }}</span>
            </p>
          </div>
          <div class="item item-content--bottom">
            <p>
              status:
              <span :class="{ 'text-warning-500': item.status == 'pending' }">{{
                item.status
              }}</span>
            </p>
            <div class="flex items-center">
              <p>{{ new Date(item.date).toLocaleString() }}</p>
              <!-- <Icon
                :name="
                  isDetail && t_id == item._id
                    ? 'material-symbols:arrow-drop-down-rounded'
                    : 'material-symbols:arrow-drop-up-rounded'
                "
                class="bg-grey-200 text-grey-700 rounded-full ml-2 text-xl"
                :class="{
                  'border border-grey-700': isDetail && t_id == item._id,
                }"
              /> -->
            </div>
          </div>
          <!-- <pre>{{ item }}</pre> -->
          <!-- <div
            v-if="isDetail && t_id == item._id"
            class="mt-4 border-t border-grey-500 p-4 bg-grey-300"
          >
          
        </div> -->
        </div>
      </div>
      <Error v-else label="No Transactions Found" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDetail = ref(false);
const t_id = ref(null);

defineProps({
  title: { type: String, default: "" },
  items: {
    type: Array,
    default: [],
  },
  cId: { type: [Number, String] },
});

const openDetail = (id) => {
  t_id.value = id;
  isDetail.value = true;
};
</script>

<style lang="scss">
.list {
  &-section {
    @apply relative;
    &__content {
      &--header {
        @apply flex items-center py-4 border-b border-grey-400;
        .icon {
          @apply text-grey-950 bg-grey-300 rounded text-2xl p-1 flex;
        }
        h4 {
          @apply font-bold text-xl text-grey-700 ml-4;
        }
      }
    }
  }
}

.item {
  &-content {
    @apply relative py-4 font-bold text-sm border-b border-grey-400;
    .item {
      @apply flex items-center justify-between;
      &-id {
        @apply text-grey-500;
      }
      &-price {
        @apply flex items-center gap-1 bg-info-500 text-white rounded py-1 px-1.5;
      }
    }
    &--top {
      @apply pb-3;
    }
    &--bottom {
      @apply text-grey-700;
    }
  }
}
</style>
