# r-button

## 基本用法

```html
<r-button types="primary">按 钮</r-button>
<r-button types="success">按 钮</r-button>
<r-button types="primary" plain>按 钮</r-button>
```
## 属性说明
## Props

| 属性名    |  类型   |  默认值 |                           说明                           | 生效时机 | 平台差异说明 |
| --------- | :-----: | ------: | :------------------------------------------------------: | -------- | :----------: |
| size      | String  | default |                        按钮的大小                        |          |              |
| type      | String  | default |                      按钮的样式类型                      |          |              |
| plain     | Boolean |   false |                 按钮是否镂空，背景色透明                 |          |              |
| disabled  | Boolean |   false |                         是否禁用                         |          |              |
| loading   | Boolean |   false |                名称前是否带 loading 图标                 |          |              |
| form-type | String  |         | 用于 "" 组件，点击分别会触发 "" 组件的 submit/reset 事件 |          |              |
| plain     | Boolean |   false |                 按钮是否镂空，背景色透明                 |
| open-type | String  |         |                         开放能力                         |
| plain     | Boolean |   false |                 按钮是否镂空，背景色透明                 |          |              |
 
* <font color="#FF7D00">open-type="launchApp"</font> 时需要调起的APP接入微信OpenSDK[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)


## size 有效值
|   值    |   说明   |
| :-----: | :------: |
| default | 默认大小 |
|  large  |    大    |
|  mini   |   迷你   |

## type 有效值

|   值    |  说明  |
| :-----: | :----: |
| default |  默认  |
| primary |  蓝色  |
| warning | 橙黄色 |
| success |  绿色  |
|  Info   |  灰色  |

## form-type 有效值

|   值   |   说明   |
| :----: | :------: |
| submit | 提交表单 |
| reset  | 重置表单 |

## open-type 有效值

|    值    |                       说明                       |         平台差异          |
| :------: | :----------------------------------------------: | :-----------------------: |
| feedback | 打开“意见反馈”页面，用户可提交反馈内容并上传日志 | App、微信小程序、QQ小程序 |
|  reset   |                     重置表单                     |                           |
## 示例

<div class="example-box">

```html
<template>
  <r-button types="primary">按 钮</r-button>
  <r-button types="success">按 钮</r-button>
  <r-button types="warn">按 钮</r-button>
  <r-button types="error">按 钮</r-button>
  <r-button types="primary" plain>按 钮</r-button>
  <r-button types="success" plain>按 钮</r-button>
  <r-button types="warn" plain>按 钮</r-button>
  <r-button types="error" plain>按 钮</r-button>
  <r-button>按 钮</r-button>
  <r-button types="success" size="large">按 钮</r-button>
  <r-button types="success" size="large" plain>按 钮</r-button>
  <r-button types="warn" plain size="mini">按 钮</r-button>
  <r-button types="error" plain size="mini">按 钮</r-button>
  <r-button size="mini">按 钮</r-button>
  <r-button types="success" size="large" plain round>按 钮</r-button>
  <r-button types="primary" round>按 钮</r-button>
  <r-button types="warn" size="mini" round>按 钮</r-button>
</template>
```

<iframe id="iframeCon" :src="getBaseUrl()" width="379px" height="812px" class="iframeCon-box"></iframe>
</div>

<script setup lang="ts">
import {getBaseUrl} from "/utils/getBaseUrl"

</script>
