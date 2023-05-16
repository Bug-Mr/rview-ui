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

|          值          |                                                       说明                                                       |                                                                                                      平台差异                                                                                                      |
| :------------------: | :--------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       feedback       |                                 打开“意见反馈”页面，用户可提交反馈内容并上传日志                                 |                                                                                             App、微信小程序、QQ小程序                                                                                              |
|        share         |                                                   触发用户转发                                                   |                                                   微信小程序、百度小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序、360小程序                                                    |
|     getUserInfo      |                               获取用户信息，可以从@getuserinfo回调中获取到用户信息                               |                                                                        微信小程序、百度小程序、QQ小程序、快手小程序、京东小程序、360小程序                                                                         |
|       contact        |             打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 @contact 回调中获得具体信息             |                                                                                   微信小程序、百度小程序、快手小程序、字节小程序                                                                                   |
|    getPhoneNumber    |                            获取用户手机号，可以从@getphonenumber回调中获取到用户信息                             |                                 微信小程序、百度小程序、字节跳动小程序、支付宝小程序、快手小程序、京东小程序。App平台另见[一键登陆](https://uniapp.dcloud.net.cn/univerify.html#)                                  |
|      launchApp       |                           小程序中打开APP，可以通过app-parameter属性设定向APP传的参数                            | [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)、[QQ小程序](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_app.html)快手小程序、京东小程序 |
|     openSetting      |                                                  打开授权设置页                                                  |                                                                        微信小程序、QQ小程序、百度小程序、快手小程序、京东小程序、360小程序                                                                         |
|     chooseAvatar     |                              获取用户头像，可以从@chooseavatar回调中获取到头像信息                               |                                                                                               微信小程序2.21.2版本+                                                                                                |
|  uploadDouyinVideo   |                                                   发布抖音视频                                                   |                                                                                               字节小程序2.65.0版本+                                                                                                |
|          im          |                                             字节小程序2.80.0版本+频                                              |                                                                                               字节小程序2.65.0版本+                                                                                                |
|     getAuthorize     |                                                  支持小程序授权                                                  |                                                                                                   支付宝小程序+                                                                                                    |
|      lifestyle       |                                                    关注生活号                                                    |                                                                                                   支付宝小程序+                                                                                                    |
|     contactShare     |                                                 分享到通讯录好友                                                 |                                                                                           支付宝小程序基础库1.11.0版本+                                                                                            |
|   openGroupProfile   |   呼起QQ群资料卡页面，可以通过group-id属性设定需要打开的群资料卡的群号，同时manifest.json中必须配置groupIdList   |                                                                                              QQ小程序基础库1.4.7版本+                                                                                              |
|   openGuildProfile   |                              呼起频道页面，可以通过guild-id属性设定需要打开的频道ID                              |                                                                                             QQ小程序基础库1.12.0版本+                                                                                              |
|  openPublicProfile   | 打开公众号资料卡，可以通过public-id属性设定需要打开的公众号资料卡的号码，同时manifest.json中必须配置publicIdList |                                                                                             QQ小程序基础库1.12.0版本+                                                                                              |
| shareMessageToFriend |                                  在自定义开放数据域组件中,向指定好友发起分享据                                   |                                                                                             QQ小程序基础库1.17.0版本+                                                                                              |
|      addFriend       |                   添加好友， 对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权                    |                                                                                                      QQ小程序                                                                                                      |
|     addColorSign     |                                    添加彩签，点击后添加状态有用户提示，无回调                                    |                                                                                             QQ小程序基础库1.10.0版本+                                                                                              |
|     addGroupApp      |              添加群应用（只有管理员或群主有权操作），添加后给button绑定@addgroupapp事件接收回调数据              |                                                                                             QQ小程序基础库1.16.0版本+                                                                                              |
|    addToFavorites    |                             收藏当前页面，点击按钮后会触发Page.onAddToFavorites方法                              |                                                                                             QQ小程序基础库1.19.0版本+                                                                                              |
|    chooseAddress     |                       选择用户收货地址，可以从@chooseaddress回调中获取到用户选择的地址信息                       |                                                                                               百度小程序3.160.3版本+                                                                                               |
|  chooseInvoiceTitle  |                   选择用户发票抬头，可以从@chooseinvoicetitle回调中获取到用户选择发票抬头信息                    |                                                                                               百度小程序3.160.3版本+                                                                                               |
|        login         |                                     登录，可以从@login回调中确认是否登录成功                                     |                                                                                               百度小程序3.230.1版本+                                                                                               |
|      subscribe       |                                       订阅类模板消息，需要用户授权才可发送                                       |                                                                                                     百度小程序                                                                                                     |
|       favorite       |                                                   触发用户收藏                                                   |                                                                                                     快手小程序                                                                                                     |
|      watchLater      |                                                 触发用户稍后再看                                                 |                                                                                                     快手小程序                                                                                                     |
|     openProfile      |                                                 触发打开用户主页                                                 |                                                                                                     快手小程序                                                                                                     |


#### feedback
open-type 为 feedback时：
* 小程序中，开发者可以登录 [微信小程序管理后台](https://mp.weixin.qq.com/) 、[QQ小程序后台后](https://q.qq.com/#/)，进入菜单“客服反馈”页面获取反馈内容。
* 在 App 中，开发者登录 [DCloud开发者中心](https://dev.dcloud.net.cn/pages/common/login) 后点击应用名称，进入左侧菜单“用户反馈”页面获取反馈内容。
* 但推荐使用全端的、开源的、云端一体的意见反馈功能，[前端部分](https://ext.dcloud.net.cn/plugin?id=50)、[管理端部分](https://ext.dcloud.net.cn/plugin?id=4992)

#### button点击
button 组件的点击遵循 vue 标准的 @click事件。

button 组件没有 url 属性，如果要跳转页面，可以在@click中编写，也可以在button组件外面套一层 navigator 组件。举例，如需跳转到about页面，可按如下几种代码写法执行：
```html
<template>
	<view>
		<navigator url="/pages/about/about"><button type="default">通过navigator组件跳转到about页面</button></navigator>
		<r-button type="default" @click="goto('/pages/about/about')">通过方法跳转到about页面</r-button>
		<r-button type="default" @click="navigateTo('/pages/about/about')">跳转到about页面</r-button><!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
	</view>
</template>

<script setup lang="ts">
  function goto(url:string){
    uni.navigateTo({
				url:url
		})
  }
</script>
```

注意
* 点击 share 分享按钮时会触发 [onShareAppMessage](https://uniapp.dcloud.net.cn/api/plugins/share.html#)
* 支付宝小程序平台，获取用户手机号时，建议先通过条件编译的方式，调用支付宝原生API，[参考](https://opendocs.alipay.com/mini/api/getphonenumber)

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
