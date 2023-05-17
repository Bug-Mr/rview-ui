<template>
  <r-button type="primary">按 钮</r-button>
  <r-button type="success">按 钮</r-button>
  <r-button type="warn">按 钮</r-button>
  <r-button type="error">按 钮</r-button>
  <r-button type="primary" plain>按 钮</r-button>
  <r-button type="success" plain>按 钮</r-button>
  <r-button type="warn" plain>按 钮</r-button>
  <r-button type="error" plain>按 钮</r-button>
  <r-button>按 钮</r-button>
  <r-button type="success" size="large">按 钮</r-button>
  <r-button type="success" size="large" plain>按 钮</r-button>
  <r-button type="warn" plain size="mini">按 钮</r-button>
  <r-button type="error" plain size="mini">按 钮</r-button>
  <r-button size="mini">按 钮</r-button>

  <r-button type="success" size="large" plain round>按 钮</r-button>
  <r-button type="primary" round>按 钮</r-button>
  <r-button type="warn" size="mini" round>按 钮</r-button>
  <r-button type="primary" disabled>按 钮</r-button>
  <r-button type="success" disabled @click="onTabItemTap">按 钮</r-button>
  <r-button type="primary" :loading="state.loading" :disabled="state.loading" @click="onTabItemTap"
    open-type="chooseAvatar">按 钮</r-button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
  selected: 1,
  loading: false,
});
function onTabItemTap() {
  state.loading = true;
  setTimeout(() => {
    state.loading = false;
  }, 3000);
}
</script>
