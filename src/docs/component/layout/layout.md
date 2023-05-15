# r-layout

## 基本用法

```html
    <r-row gutter="10">
      <r-col :span="12"></r-col>
    </r-row/>
```

## API

## 属性/方法

### r-layout Props

| 属性名        |     类型      | 默认值 |                            说明                            |
| ------------- | :-----------: | -----: | :--------------------------------------------------------: |
| col 3 is      | right-aligned |  $1600 | 是否无需背景颜色，为 true 时，背景颜色将变为文字的字体颜色 |
| col 2 is      |   centered    |    $12 |                             ww                             |
| zebra stripes |   are neat    |     $1 |                             ee                             |

### r-layout Events

| 事件名 |      事件说明       | 返回参数 |
| :----: | :-----------------: | :------: |
| @click | 点击 Badge 触发事件 |    -     |

## 示例

<div class="example-box">

```vue
<template>
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

<script setup lang="ts"></script>
```
<iframe id="iframeCon" :src="getBaseUrl()" width="379px" height="812px" class="iframeCon-box"></iframe>
</div>

<script setup lang="ts">
import {getBaseUrl} from "/utils/getBaseUrl"
</script>
