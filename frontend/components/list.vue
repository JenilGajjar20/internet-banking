<template>
  <div class="list-section container">
    <div class="list-section__content">
      <div class="list-section__content--header">
        <NuxtLink :to="`/dashboard/${cData?._id}`" class="icon arrow">
          <Icon name="uiw:arrow-left" />
        </NuxtLink>
        <h4>{{ title }}</h4>
      </div>
      <div
        v-if="items.status === 200 && !isLoading"
        class="list-section__content--body"
      >
        <div
          v-for="item in items?.data?.data"
          :key="item._id"
          class="item-content"
        >
          <div class="item item-content--top">
            <p class="item-id">Transaction id: {{ item._id }}</p>
            <p class="item-price">
              <Icon name="material-symbols:currency-rupee-rounded" />
              <span>{{ item.amount }}</span>
            </p>
          </div>
          <div class="item item-content--bottom">
            <p>
              status:
              <span
                :class="{
                  'text-warning-500': item.status == 'pending',
                  'text-primary-700': item.status == 'completed',
                }"
                >{{ item.status }}</span
              >
            </p>
            <Icon
              @click="openDetail(item._id)"
              :name="
                isDetail && t_id == item._id
                  ? 'material-symbols:arrow-drop-up-rounded'
                  : 'material-symbols:arrow-drop-down-rounded'
              "
              class="bg-grey-200 text-grey-700 rounded-full ml-2 text-xl"
              :class="{
                'border border-grey-700': isDetail && t_id == item._id,
              }"
            />
          </div>
          <div
            v-if="isDetail && t_id == item._id"
            class="absolute bottom-0 h-full bg-black left-0 right-0 bg-opacity-50"
          >
            <div class="bg-white absolute bottom-0 w-full rounded-t-xl">
              <div class="text-right border-b border-gray-500 p-3">
                <Icon
                  class="cursor-pointer"
                  name="uiw:close"
                  @click="closeDetail"
                />
              </div>
              <p class="flex items-center justify-between py-4 px-6 border-b">
                <span> TimeStamp: </span>
                <span>{{ new Date(item.date).toLocaleString() }}</span>
              </p>
              <p class="flex items-center justify-between py-4 px-6 border-b">
                <span> Type: </span>
                <span>{{ item.transactionType }}</span>
              </p>
              <p class="flex items-center justify-between py-4 px-6 border-b">
                <span> Status: </span>
                <span
                  class="text-white font-bold text-xs rounded px-2 py-1"
                  :class="{
                    'bg-primary-700': item.status == 'completed',
                    'bg-danger-700': item.status == 'rejected',
                    'bg-warning-700': item.status == 'pending',
                  }"
                  >{{ item.status }}</span
                >
              </p>
              <p class="flex items-center justify-between py-4 px-6 border-b">
                <span> Amount: </span>
                <span class="flex items-center">
                  <Icon name="material-symbols:currency-rupee-rounded" />
                  {{ item.amount }}
                </span>
              </p>
              <p class="flex items-center justify-between py-4 px-6 border-b">
                <span> To: </span>
                <span class="text-gray-500">{{ item?.recipient?.r_id }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ShimmersList v-else-if="isLoading" />
      <div
        v-else-if="items.status === 404 || items.status === 500"
        class="flex flex-col items-center lg:pb-10"
      >
        <Error :label="errorMessage" />
        <!-- <ButtonSolidLink
          class="lg:hidden"
          to="/dashboard/transactions/new"
          label="Create Transaction"
          icon
        /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const isDetail = ref(false);
const t_id = ref(null);

const props = defineProps({
  title: { type: String, default: "" },
  items: { type: Object, default: {} },
  cData: { type: Object, default: {} },
  isLoading: { type: Boolean, default: false },
  errorMessage: { type: [String, Object] },
});

// const filterItems = computed(() => {
//   return props.items.filter((item) => item?._id == props.cData?._id);
// });

const openDetail = (id) => {
  t_id.value = id;
  isDetail.value = true;
};

const closeDetail = () => {
  t_id.value = null;
  isDetail.value = false;
};
</script>

<style lang="scss">
.list {
  &-section {
    // @apply relative;
    &__content {
      &--header {
        @apply flex items-center py-4 border-b border-grey-400 lg:rounded-tr-lg lg:justify-between;
        .icon.arrow {
          @apply text-grey-950 bg-grey-300 rounded text-xl p-2 flex lg:hidden;
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
    @apply py-4 font-bold text-sm border-b border-grey-400;
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
      @apply text-grey-700 font-bold;
    }
  }
}
</style>
