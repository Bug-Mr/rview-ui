# r-section

## 基本用法

```html
<r-section title="基础用法" subTitle="副标题"> </r-section>
```

## API

## 属性/方法

### r-section Props

| 属性名           |      类型      |  默认值 |                                           说明                                            |
| ---------------- | :------------: | ------: | :---------------------------------------------------------------------------------------: |
| type             |     String     |       - |              装饰类型，可选值：line（竖线）、circle（圆形）、square（方形）               |
| title            |     String     |       - |                                          主标题                                           |
| subTitle         |     String     |       - |                                          副标题                                           |
| titleFontSize    |     String     |   28rpx |                                      主标题字体大小                                       |
| subTitleFontSize |     String     |   24rpx |                                      副标题字体大小                                       |
| titleColor       |     String     | #333333 |                                      主标题字体颜色                                       |
| subTitleColor    |     String     | #999999 |                                      副标题字体颜色                                       |
| padding          | Boolean/String |   false |  默认插槽容器的 padding 值，传入类型为 Boolean 时，设置为 '0rpx 20rpx 10rpx 20rpx'或 '0'  |
| rightIcon        | Boolean/String |   false | 右侧图标，传入类型为 Boolean true 时 ,设置为 'arrow-right', String 时为 r-icon 的 type 值 |
| rightIconColor   |     String     | #333333 |     右侧图标颜色，只有当 rightIcon 为 true 时或者 rightIcon 为 r-icon 有效值时才生效      |

### r-section Events

| 事件名 |         说明          | 返回参数 |
| :----: | :-------------------: | :------: |
| @click | 点击 Section 触发事件 |    -     |

### r-section Slots

| 插槽称名  |     说明     |
| :-------: | :----------: |
|  default  |   默认插槽   |
| rightIcon | 右侧图标插槽 |

## 示例

<div class="example-box">

```vue
<template>
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
  <r-section title="自定义标题颜色" subTitle="副标题" titleColor="red">
  </r-section>

  <r-section title="默认插槽" subTitle="副标题">
    <view>默认插槽内容</view>
  </r-section>
</template>

<script setup lang="ts"></script>
```

<iframe id="iframeCon" :src="getBaseUrl()" width="379px" height="812px" class="iframeCon-box"></iframe>
</div>

<script setup lang="ts">
import {getBaseUrl} from "/utils/getBaseUrl"

</script>
