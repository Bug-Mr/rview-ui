<template>
  <view class="icon-box">
    <view v-for="item in iconsList" :key="item" class="item-box">
      <view class="item">
        <r-icon :type="item" color="#606266"></r-icon>
        <view class="name" @click="copyName(item)">{{ item }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import icons from "../../components/r-icon/icons";
const iconsList = computed(() => {
  const list = [];
  for (let key in icons) {
    list.push(key);
  }
  return list;
});

function copyName(value: string) {
  uni.setClipboardData({
    data: value, //要被复制的内容
    success: () => {
      //复制成功的回调函数
      uni.showToast({
        title: "复制成功",
        icon: "success",
        duration: 1000,
      });
    },
  });
}
</script>

<style lang="scss" scoped>
.icon-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20rpx;
  .item-box {
    padding: 20rpx 10rpx;
    flex: 1;
    border: 1rpx #f5f5f5 solid;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      display: flex;
      flex-direction: column;
      min-height: 200rpx;
      align-items: center;
      justify-content: center;
      .name {
        min-width: 196rpx;
        font-size: 24rpx;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden; /*这个参数根据需求来决定要不要*/
        text-align: center;
        cursor: pointer;
        &:hover {
          color: #007aff;
        }
      }
    }
  }
}
</style>
