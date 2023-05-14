<template>
  <r-button types="primary">按 钮</r-button>
  <r-button types="success">按 钮</r-button>
  <r-button types="warn">按 钮</r-button>
  <r-button types="error">按 钮</r-button>
  <r-button types="primary" plain>按 钮</r-button>
  <r-button types="success" plain>按 钮</r-button>
  <r-button types="warn" plain>按 钮</r-button>
  <r-button types="error" plain>按 钮</r-button>
  <r-button>按 钮</r-button>
  <r-button types="success" size="large">按 钮</r-button>
  <r-button types="success" size="large" plain>按 钮</r-button>
  <r-button types="warn" plain size="mini">按 钮</r-button>
  <r-button types="error" plain size="mini">按 钮</r-button>
  <r-button size="mini">按 钮</r-button>

  <r-button types="success" size="large" plain round>按 钮</r-button>
  <r-button types="primary" round>按 钮</r-button>
  <r-button types="warn" size="mini" round>按 钮</r-button>
  <r-button types="primary" disabled>按 钮</r-button>
  <r-button types="success" disabled @click="onTabItemTap">按 钮</r-button>
  <r-button types="primary" :loading="state.loading" :disabled="state.loading" @click="onTabItemTap" open-type="chooseAvatar">按 钮</r-button>
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
