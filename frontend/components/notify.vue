<template>
  <div
    class="absolute left-4 top-4 z-10 rounded border-l-4 p-4 flex items-center"
    :class="{
      'bg-success-500 border-success-950': notifyStatus == 'success',
      'bg-danger-500 border-danger-950': notifyStatus == 'danger',
      'bg-warning-500 border-warning-950': notifyStatus == 'warning',
      'bg-info-500 border-info-950': notifyStatus == 'info',
    }"
  >
    <Icon
      name="uiw:circle-check"
      class="text-2xl"
      :class="{
        'text-success-900': notifyStatus == 'success',
        'text-danger-900': notifyStatus == 'danger',
        'text-warning-900': notifyStatus == 'warning',
        'text-info-900': notifyStatus == 'info',
      }"
    />
    <p
      class="ml-4 font-bold"
      :class="{
        'text-success-950': notifyStatus == 'success',
        'text-danger-950': notifyStatus == 'danger',
        'text-warning-950': notifyStatus == 'warning',
        'text-info-950': notifyStatus == 'info',
      }"
    >
      {{ notifyMsg }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  notify: {
    type: Boolean,
    default: false,
  },
  notifyMsg: { type: String },
  notifyStatus: { type: String },
});
</script>

<style lang="scss"></style>
