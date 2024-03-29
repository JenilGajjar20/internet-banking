<template>
  <div class="layers">
    <div class="layer-1">
      <div class="layer-2">
        <div class="layer-3">
          <div class="layer-4">
            <Icon name="ant-design:file-outlined" class="text-7xl" />
          </div>
        </div>
      </div>
    </div>
    <p class="text-2xl pt-4 font-bold text-grey-500 text-center">{{ label }}</p>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: "" },
});
</script>

<style lang="scss">
.layers {
  @apply py-10 flex flex-col items-center justify-center text-grey-300;
}

.layer-1 {
  @apply bg-primary-200 rounded-full p-4;
}

.layer-2 {
  @apply bg-primary-400 rounded-full p-4;
}

.layer-3 {
  @apply bg-primary-600 rounded-full p-4;
}

.layer-4 {
  @apply bg-primary-800 rounded-full p-7;
}
</style>
