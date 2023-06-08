<template>
  <view :class="'r-col r-col-' + span" :style="{
    flex: `calc(100% / 24 * ${span} - ${Number(gutter)}rpx)`,
  }">
    <slot></slot>
  </view>
</template>

<script lang="ts">
export default {
  // #ifdef MP-WEIXIN
  options: {
    virtualHost: true, // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现，可使用flex布局
  },
  // #endif
};
</script>

<script lang="ts" setup>
import { computed, getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();
const gutter = computed(() => {
  // #ifdef H5
  return proxy.$parent.$parent.gutter;
  // #endif
  return proxy.$parent.gutter;
});
defineProps({
  span: {
    type: Number,
    default: 24,
  },
});
</script>
