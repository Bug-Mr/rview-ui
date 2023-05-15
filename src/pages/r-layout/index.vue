<template>
  <view class="box">
    <r-row gutter="10">
      <r-col :span="12">
        <view class="item">span:12</view>
      </r-col>
      <r-col :span="12">
        <view class="item"></view>
      </r-col>
      <r-col :span="6">
        <view class="item">span:6</view>
      </r-col>
      <r-col :span="6">
        <view class="item"></view>
      </r-col>
      <r-col :span="6">
        <view class="item"></view>
      </r-col>
      <r-col :span="6">
        <view class="item"></view>
      </r-col>
      <r-col :span="8">
        <view class="item">span:8</view>
      </r-col>
      <r-col :span="8">
        <view class="item"></view>
      </r-col>
      <r-col :span="8">
        <view class="item"></view>
      </r-col>
    </r-row>
  </view>
</template>

<style lang="scss" scoped>
.box {
  height: calc(100vh - 130rpx);
  padding: 20rpx;
  background-color: #f5f5f5;
  .item {
    width: 100%;
    height: 50rpx;
    background-color: #ffffff;
  }
}
</style>