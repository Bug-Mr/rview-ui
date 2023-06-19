<template>
  <view class="page-box">
    <r-section title="Button" subTitle="按钮" @click="gotopath('button')" rightIcon type="line"></r-section>
    <r-section title="Icon" subTitle="Icon图标" @click="gotopath('icon')" rightIcon type="line"></r-section>
    <r-section title="Section" subTitle="标题栏" @click="gotopath('section')" rightIcon type="line"></r-section>
    <r-section title="Layout" subTitle="栅格布局" @click="gotopath('layout')" rightIcon type="line"></r-section>
  </view>
</template>

<script lang="ts" setup>
function gotopath(key: string) {
  uni.navigateTo(
    {
      url: `/pages/r-${key}/index`
    }
  )
}
</script>

<style lang="scss" scoped>
.page-box {
  padding: 20rpx;
  height: calc(100vh - 150rpx);
  background: #f5f5f5;
}
</style>
