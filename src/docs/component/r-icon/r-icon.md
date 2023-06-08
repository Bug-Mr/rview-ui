# r-icon

## 基本用法

```html
<r-icon type="level" /></r-icon>
```

## 传入图片

注意：

* 当传入type为图片地址时 color属性将会失效
* imgStyle 中width、height不传时，默认大小为size 。imgStyle内的width、height优先及大于size
* 当imgStyle的width、height和size都不传时，默认大小为size的默认值23rpx
* 当imgStyle的width、height的写法可以是字符串，数值，单位rpx可不设置默认为rpx,如果设置就使用传入的值
*  如:imgStyle="{ width: 30, height: 30 }"、imgStyle="{ width: "30", height: "30" }"、imgStyle="{ width: "30rpx", height: "30rpx" }"
```html
<!-- 图片地址来源于百度，如果侵权，请联系删除 -->
      <r-icon type="https://img2.baidu.com/it/u=3340340328,1872355026&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" size="30"
          :imgStyle="{ width: 30, height: 30 }"></r-icon>
````

## API

## 属性/方法

### r-icon Props

| 属性名   |  类型  |  默认值 |                                          说明                                           |
| -------- | :----: | ------: | :-------------------------------------------------------------------------------------: |
| type     | String |         |                                       icon的类型                                        |
| size     | Number |      32 |                                   icon的大小，单位rpx                                   |
| color    | Color  | #333333 |                                icon的颜色，同css的color                                 |
| imgStyle | Object |         |                          图片自定义样式，type为图片链接时生效                           |
| index    |  any   |         | 使用场景并不高，会在下个版本删除，图标标识，点击icon时回调返回传入的index，区分点击icon |
### r-icon Events

| 事件名 |    事件说明    |           返回参数            |
| :----: | :------------: | :---------------------------: |
| @click | 点击图标时触发 | index: 通过props传递的index值 |

## 示例

<div class="example-box">

```vue
<template>
  <r-icon type="level" />
</template>

<script setup lang="ts"></script>
```

<iframe id="iframeCon" :src="getBaseUrl()" width="379px"  class="iframeCon-box"></iframe>
</div>

<script setup lang="ts">
import {getBaseUrl} from "/utils/getBaseUrl"
</script>
