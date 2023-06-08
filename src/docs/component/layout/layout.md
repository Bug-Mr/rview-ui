# r-layout

## 基本用法

```html
    <r-row gutter="10">
      <r-col :span="12"></r-col>
    </r-row/>
```

## API

## 属性/方法

### r-row Props

| 属性名 |  类型  | 默认值 |   说明   | 可选值 |
| ------ | :----: | -----: | :------: | :----: |
| gutter | String | Number | 栅格间隔 |   -    |

### r-col Props

| 属性名 |  类型  | 默认值 |      说明      | 可选值 |
| ------ | :----: | -----: | :------------: | :----: |
| span   | Number |     24 | 栅格占据的列数 |  1-24  |

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
