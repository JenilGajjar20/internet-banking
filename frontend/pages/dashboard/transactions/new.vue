<template>
  <div class="new-transaction container primary-fonts">
    <div class="new-transaction__section">
      <div class="new-transaction__section--content">
        <div class="new-transaction__section--content-header">
          <h4>Create Transaction</h4>
        </div>
        <div class="new-transaction__section--content-form">
          <form>
            <div class="">
              <label for="t_type">Transaction Type</label>
              <select name="t_type">
                <option
                  :value="option.value"
                  v-for="option in options"
                  :key="option.id"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = [
  {
    id: 1,
    value: "transfer",
    label: "Transfer",
  },
  {
    id: 2,
    value: "deposit",
    label: "Deposit",
  },
];

definePageMeta({
  layout: "dashboard",
});
</script>

<style lang="scss"></style>
