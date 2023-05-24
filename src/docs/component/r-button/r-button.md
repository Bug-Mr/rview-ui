# r-button

## 基本用法

```html
<r-button type="primary">按 钮</r-button>
<r-button type="success">按 钮</r-button>
<r-button type="primary" plain>按 钮</r-button>
```

## 属性说明

## Props

| 属性名                 |  类型   |       默认值 |                                             说明                                             | 生效时机                       |                平台差异说明                |
| ---------------------- | :-----: | -----------: | :------------------------------------------------------------------------------------------: | ------------------------------ | :----------------------------------------: |
| size                   | String  |      default |                                          按钮的大小                                          |                                |                                            |
| type                   | String  |      default |                                        按钮的样式类型                                        |                                |                                            |
| plain                  | Boolean |        false |                                   按钮是否镂空，背景色透明                                   |                                |                                            |
| disabled               | Boolean |        false |                                           是否禁用                                           |                                |                                            |
| loading                | Boolean |        false |                                  名称前是否带 loading 图标                                   |                                |                                            |
| form-type              | String  |              |                   用于 "" 组件，点击分别会触发 "" 组件的 submit/reset 事件                   |                                |                                            |
| plain                  | Boolean |        false |                                   按钮是否镂空，背景色透明                                   |
| open-type              | String  |              |                                           开放能力                                           |
| hover-class            | String  | button-hover |               指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果               |                                |           App-nvue 平台暂不支持            |
| hover-start-time       | Number  |           20 |                                按住后多久出现点击态，单位毫秒                                |                                |                                            |
| hover-stay-time        | Number  |           70 |                              手指松开后点击态保留时间，单位毫秒                              |                                |                                            |
| app-parameter          | String  |              |                  打开 APP 时，向 APP 传递的参数，open-type=launchApp 时有效                  |                                |           微信小程序、QQ 小程序            |
| hover-stop-propagation | boolean |        false |                            指定是否阻止本节点的祖先节点出现点击态                            |                                |                 微信小程序                 |
| lang                   | string  |         'en' |              指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。               |                                |                 微信小程序                 |
| session-from           | string  |              |                             会话来源，open-type="contact"时有效                              |                                |                 微信小程序                 |
| send-message-title     | string  |     当前标题 |                        会话内消息卡片标题，open-type="contact"时有效                         |                                |                 微信小程序                 |
| send-message-path      | string  | 当前分享路径 |                 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效                  |                                |                 微信小程序                 |
| send-message-img       | string  | 当前页面截图 |                        会话内消息卡片图片，open-type="contact"时有效                         |                                |                 微信小程序                 |
| show-message-card      | boolean |        false |                                   按钮是否镂空，背景色透明                                   |                                |                                            |
| group-id               | String  |              |                                  打开群资料卡时，传递的群号                                  | open-type="openGroupProfile"   |                 QQ 小程序                  |
| guild-id               | String  |              |                                 打开频道页面时，传递的频道号                                 |                                |                                            |
| public-id              | String  |              |                                打开公众号资料卡时，传递的号码                                | open-type="openPublicProfile"  |                 QQ 小程序                  |
| data-im-id             | String  |              |                                         客服的抖音号                                         | open-type="im"                 |          字节小程序 2.68.0 版本+           |
| data-im-type           | String  |              |                                         IM 卡片类型                                          | open-type="im"                 |          字节小程序 2.80.0 版本+           |
| data-goods-id          | String  |              |                    商品的 id，仅支持泛知识课程库和生活服务商品库中的商品                     | open-type="im"                 |          字节小程序 2.80.0 版本+           |
| data-order-id          | String  |              |                                订单的 id，仅支持交易 2.0 订单                                | open-type="im"                 |          字节小程序 2.80.0 版本+           |
| data-biz-line          | String  |              |                          商品类型，“1”代表生活服务，“2”代表泛知识。                          | open-type="im"                 |          字节小程序 2.80.0 版本+           |
| @getphonenumber        | Handler |              |                                      获取用户手机号回调                                      | open-type="getPhoneNumber"     | 微信、支付宝、百度、字节、快手、京东小程序 |
| @getuserinfo           | Handler |              | 用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 uni.getUserInfo | open-type="getUserInfo"        |      微信、QQ、百度、快手、京东小程序      |
| @error                 | Handler |              |                               当使用开放能力时，发生错误的回调                               | open-type="launchApp"          |         微信、QQ、快手、京东小程序         |
| @opensetting           | Handler |              |                                 在打开授权设置页并关闭后回调                                 | open-type="openSetting"        |     微信、QQ、百度、快手、京东小程序+      |
| @launchapp             | Handler |              |                                 从小程序打开 App 成功的回调                                  | open-type="launchApp"          |        微信、QQ、快手、京东小程序+         |
| @contact               | Handler |              |                                         客服消息回调                                         | open-type="contact"            |        微信、QQ、百度、快手小程序+         |
| @chooseavatar          | Handler |              |                                       获取用户头像回调                                       | open-type="chooseAvatar"       |                 微信小程序                 |
| @chooseaddress         | Handler |              |                               调起用户编辑并选择收货地址的回调                               | open-type="chooseAddress"      |                 百度小程序                 |
| @chooseinvoicetitle    | Handler |              |                                    用户选择发票抬头的回调                                    | open-type="chooseInvoiceTitle" |                 百度小程序                 |
| @subscribe             | Handler |              |                                       订阅消息授权回调                                       | open-type="subscribe"          |                 百度小程序                 |
| @login                 | Handler |              |                                           登录回调                                           | open-type="login"              |                 百度小程序                 |
| @im                    | Handler |              |                                    监听跳转 IM 的成功回调                                    | open-type="im"                 |          字节小程序 2.68.0 版本+           |

- <font color="#FF7D00">open-type="launchApp"</font> 时需要调起的 APP 接入微信 OpenSDK[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)

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

|          值          |                                                         说明                                                          |                                                                                                      平台差异                                                                                                       |
| :------------------: | :-------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       feedback       |                                   打开“意见反馈”页面，用户可提交反馈内容并上传日志                                    |                                                                                             App、微信小程序、QQ 小程序                                                                                              |
|        share         |                                                     触发用户转发                                                      |                                                   微信小程序、百度小程序、支付宝小程序、字节跳动小程序、飞书小程序、QQ 小程序、快手小程序、京东小程序、360 小程序                                                   |
|     getUserInfo      |                                 获取用户信息，可以从@getuserinfo 回调中获取到用户信息                                 |                                                                        微信小程序、百度小程序、QQ 小程序、快手小程序、京东小程序、360 小程序                                                                        |
|       contact        |               打开客服会话，如果用户在会话中点击消息卡片后返回应用，可以从 @contact 回调中获得具体信息                |                                                                                   微信小程序、百度小程序、快手小程序、字节小程序                                                                                    |
|    getPhoneNumber    |                              获取用户手机号，可以从@getphonenumber 回调中获取到用户信息                               |                                 微信小程序、百度小程序、字节跳动小程序、支付宝小程序、快手小程序、京东小程序。App 平台另见[一键登陆](https://uniapp.dcloud.net.cn/univerify.html#)                                  |
|      launchApp       |                           小程序中打开 APP，可以通过 app-parameter 属性设定向 APP 传的参数                            | [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html)、[QQ 小程序](https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/open_app.html)快手小程序、京东小程序 |
|     openSetting      |                                                    打开授权设置页                                                     |                                                                        微信小程序、QQ 小程序、百度小程序、快手小程序、京东小程序、360 小程序                                                                        |
|     chooseAvatar     |                                获取用户头像，可以从@chooseavatar 回调中获取到头像信息                                 |                                                                                               微信小程序 2.21.2 版本+                                                                                               |
|  uploadDouyinVideo   |                                                     发布抖音视频                                                      |                                                                                               字节小程序 2.65.0 版本+                                                                                               |
|          im          |                                               字节小程序 2.80.0 版本+频                                               |                                                                                               字节小程序 2.65.0 版本+                                                                                               |
|     getAuthorize     |                                                    支持小程序授权                                                     |                                                                                                    支付宝小程序+                                                                                                    |
|      lifestyle       |                                                      关注生活号                                                       |                                                                                                    支付宝小程序+                                                                                                    |
|     contactShare     |                                                   分享到通讯录好友                                                    |                                                                                           支付宝小程序基础库 1.11.0 版本+                                                                                           |
|   openGroupProfile   |  呼起 QQ 群资料卡页面，可以通过 group-id 属性设定需要打开的群资料卡的群号，同时 manifest.json 中必须配置 groupIdList  |                                                                                             QQ 小程序基础库 1.4.7 版本+                                                                                             |
|   openGuildProfile   |                               呼起频道页面，可以通过 guild-id 属性设定需要打开的频道 ID                               |                                                                                            QQ 小程序基础库 1.12.0 版本+                                                                                             |
|  openPublicProfile   | 打开公众号资料卡，可以通过 public-id 属性设定需要打开的公众号资料卡的号码，同时 manifest.json 中必须配置 publicIdList |                                                                                            QQ 小程序基础库 1.12.0 版本+                                                                                             |
| shareMessageToFriend |                                     在自定义开放数据域组件中,向指定好友发起分享据                                     |                                                                                            QQ 小程序基础库 1.17.0 版本+                                                                                             |
|      addFriend       |                      添加好友， 对方需要通过该小程序进行授权，允许被加好友后才能调用成功用户授权                      |                                                                                                      QQ 小程序                                                                                                      |
|     addColorSign     |                                      添加彩签，点击后添加状态有用户提示，无回调                                       |                                                                                            QQ 小程序基础库 1.10.0 版本+                                                                                             |
|     addGroupApp      |               添加群应用（只有管理员或群主有权操作），添加后给 button 绑定@addgroupapp 事件接收回调数据               |                                                                                            QQ 小程序基础库 1.16.0 版本+                                                                                             |
|    addToFavorites    |                               收藏当前页面，点击按钮后会触发 Page.onAddToFavorites 方法                               |                                                                                            QQ 小程序基础库 1.19.0 版本+                                                                                             |
|    chooseAddress     |                         选择用户收货地址，可以从@chooseaddress 回调中获取到用户选择的地址信息                         |                                                                                              百度小程序 3.160.3 版本+                                                                                               |
|  chooseInvoiceTitle  |                     选择用户发票抬头，可以从@chooseinvoicetitle 回调中获取到用户选择发票抬头信息                      |                                                                                              百度小程序 3.160.3 版本+                                                                                               |
|        login         |                                       登录，可以从@login 回调中确认是否登录成功                                       |                                                                                              百度小程序 3.230.1 版本+                                                                                               |
|      subscribe       |                                         订阅类模板消息，需要用户授权才可发送                                          |                                                                                                     百度小程序                                                                                                      |
|       favorite       |                                                     触发用户收藏                                                      |                                                                                                     快手小程序                                                                                                      |
|      watchLater      |                                                   触发用户稍后再看                                                    |                                                                                                     快手小程序                                                                                                      |
|     openProfile      |                                                   触发打开用户主页                                                    |                                                                                                     快手小程序                                                                                                      |

#### feedback

open-type 为 feedback 时：

- 小程序中，开发者可以登录 [微信小程序管理后台](https://mp.weixin.qq.com/) 、[QQ 小程序后台后](https://q.qq.com/#/)，进入菜单“客服反馈”页面获取反馈内容。
- 在 App 中，开发者登录 [DCloud 开发者中心](https://dev.dcloud.net.cn/pages/common/login) 后点击应用名称，进入左侧菜单“用户反馈”页面获取反馈内容。
- 但推荐使用全端的、开源的、云端一体的意见反馈功能，[前端部分](https://ext.dcloud.net.cn/plugin?id=50)、[管理端部分](https://ext.dcloud.net.cn/plugin?id=4992)

#### button 点击

button 组件的点击遵循 vue 标准的 @click 事件。

button 组件没有 url 属性，如果要跳转页面，可以在@click 中编写，也可以在 button 组件外面套一层 navigator 组件。举例，如需跳转到 about 页面，可按如下几种代码写法执行：

```html
<template>
  <view>
    <navigator url="/pages/about/about"
      ><button type="default">
        通过navigator组件跳转到about页面
      </button></navigator
    >
    <r-button type="default" @click="goto('/pages/about/about')"
      >通过方法跳转到about页面</r-button
    >
    <r-button type="default" @click="navigateTo('/pages/about/about')"
      >跳转到about页面</r-button
    ><!-- 这种写法只有h5平台支持，不跨端，不推荐使用 -->
  </view>
</template>

<script setup lang="ts">
  function goto(url: string) {
    uni.navigateTo({
      url: url,
    });
  }
</script>
```

注意

- 点击 share 分享按钮时会触发 [onShareAppMessage](https://uniapp.dcloud.net.cn/api/plugins/share.html#)
- 支付宝小程序平台，获取用户手机号时，建议先通过条件编译的方式，调用支付宝原生 API，[参考](https://opendocs.alipay.com/mini/api/getphonenumber)

## 示例

<div class="example-box">

````html
<template>
  <r-button type="primary">按 钮</r-button>
  <r-button type="success">按 钮</r-button>
  <r-button type="warn">按 钮</r-button>
  <r-button type="error">按 钮</r-button>
  <r-button type="primary" plain>按 钮</r-button>
  <r-button type="success" plain>按 钮</r-button>
  <r-button type="warn" plain>按 钮</r-button>
  <r-button type="error" plain>按 钮</r-button>
  <r-button>按 钮</r-button>
  <r-button type="success" size="large">按 钮</r-button>
  <r-button type="success" size="large" plain>按 钮</r-button>
  <r-button type="warn" plain size="mini">按 钮</r-button>
  <r-button type="error" plain size="mini">按 钮</r-button>
  <r-button size="mini">按 钮</r-button>
  <r-button type="success" size="large" plain round>按 钮</r-button>
  <r-button type="primary" round>按 钮</r-button>
  <r-button type="warn" size="mini" round>按 钮</r-button>
  <r-button type="primary" disabled>按 钮</r-button>
  <r-button type="success" disabled @click="onTabItemTap">按 钮</r-button>
  <r-button
    type="primary"
    :loading="state.loading"
    :disabled="state.loading"
    @click="onTabItemTap"
    open-type="chooseAvatar"
    >按 钮</r-button
  >
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  const state = reactive({
    loading: false,
  });
  function onTabItemTap() {
    state.loading = true;
    setTimeout(() => {
      state.loading = false;
    }, 3000);
  }
</script>
````

<iframe id="iframeCon" :src="getBaseUrl()" width="379px" height="812px" class="iframeCon-box"></iframe>
</div>

<script setup lang="ts">
import {getBaseUrl} from "/utils/getBaseUrl"

</script>
