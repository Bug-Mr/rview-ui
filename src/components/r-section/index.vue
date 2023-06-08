<template>
  <view class="r-section">
    <!-- 标题 -->
    <view class="r-section-box" @click="emits('click')">
      <!-- 装饰线 -->
      <view
        :class="`type type--${type}`"
        :style="{ '--typeColor': typeColor }"
      ></view>
      <!-- 标题 -->
      <view class="title-box">
        <!-- 主标题 -->
        <view class="title" :style="titleStyle">
          <view class="title-text">{{ title }}</view>
          <slot name="rightIcon">
            <r-icon
              v-if="rightIcon"
              :type="rightIcon === true ? 'arrow-right' : rightIcon"
              size="14"
              :color="rightIconColor"
            />
          </slot>
        </view>
        <!-- 副标题 -->
        <view class="subTitle" :style="subTitleStyle">{{ subTitle }}</view>
      </view>
    </view>
    <!-- 内容 -->
    <view :style="paddings">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const emits = defineEmits(["click"]);
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  typeColor: {
    type: String,
    default: "#007aff",
  },
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  rightIcon: {
    type: [Boolean, String],
    default: false,
  },
  titleFontSize: {
    type: String,
    default: "28rpx",
  },
  subTitleFontSize: {
    type: String,
    default: "24rpx",
  },
  titleColor: {
    type: String,
    default: "#333333",
  },
  subTitleColor: {
    type: String,
    default: "#999999",
  },
  padding: {
    type: [Boolean, String],
    default: false,
  },
  rightIconColor: {
    type: String,
    default: "#333333",
  },
});
const titleStyle = computed(() => {
  return {
    fontSize: props.titleFontSize,
    color: props.titleColor,
  };
});
const subTitleStyle = computed(() => {
  return {
    fontSize: props.subTitleFontSize,
    color: props.subTitleColor,
  };
});
const paddings: any = computed(() => {
  return {
    padding: props.padding === true ? "0rpx 20rpx 10rpx 20rpx" : props.padding,
  };
});
</script>

<style lang="scss" scoped>
.r-section {
  background-color: #ffffff;
  margin-top: 20rpx;
}
.r-section-box {
  display: flex;
  align-items: center;
  padding: 24rpx 20rpx;
  .title-box {
    flex: 1;
  }
  .title {
    line-height: 46rpx;
    display: flex;
    align-items: center;
    .title-text {
      flex: 1;
    }
  }
  .subTitle {
    line-height: 46rpx;
  }
}
.type {
  &--line {
    width: 8rpx;
    height: 30rpx;
    background: var(--typeColor);
    border-radius: 5rpx;
    margin-right: 12rpx;
  }
  &--circle {
    width: 16rpx;
    height: 16rpx;
    background: var(--typeColor);
    border-radius: 50%;
    margin-right: 12rpx;
  }
  &--square {
    width: 16rpx;
    height: 16rpx;
    background: var(--typeColor);
    border-radius: 5rpx;
    margin-right: 12rpx;
  }
}
</style>
