<template>
  <button v-bind="$attrs" @click="add">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
function add() {
  uni.showToast({ title: "头像不能为空" });
}
</script>