<template>
  <view class="pages">
    <r-section title="基础用法" subTitle="副标题"> </r-section>
    <r-section type="line" title="竖线装饰" subTitle="副标题"> </r-section>
    <r-section type="circle" title="圆形装饰" subTitle="副标题"> </r-section>
    <r-section type="square" title="方形装饰" subTitle="副标题"> </r-section>
    <r-section
      type="line"
      title="自定义装饰颜色"
      typeColor="#f3a73f"
      subTitle="副标题"
    >
    </r-section>
    <r-section rightIcon title="右侧图标" subTitle="副标题"> </r-section>
    <r-section title="自定义标题颜色" subTitle="副标题" titleColor="red"> </r-section>

    <r-section title="默认插槽" subTitle="副标题" padding>
      <view>默认插槽内容</view>
    </r-section>
  </view>
</template>

<style lang="scss" scoped>
.pages {
  background-color: #f5f5f5;
  padding-bottom: 40rpx;
  padding: 20rpx;
}
</style>
