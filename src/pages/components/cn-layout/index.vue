<template>
    <view class="header">
        <h1>头部</h1>
    </view>
    <view class="content">
        <view class="left">
            <h1>左</h1>
        </view>
        <view class="middle">
            <slot></slot>
        </view>
    </view>
    <view class="footer">
        <h1>底部</h1>
    </view>
</template>

<style scoped>
* {
    margin: 10;
    padding: 0;
}

.header {
    width: 100%;
    height: 120rpx;
    background-color: rgb(252, 252, 252);
    text-align: center;
}

.content {
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 240rpx);
}

.left {
    width: 400rpx;
    height: 100%;
    background-color: #fcfcfc;
    text-align: center;
}

.right {
    width: 200rpx;
    height: 100%;
    background-color: pink;
    text-align: center;
}

.middle {
    /* flex为1，就是表示占据宽度剩余的全部 */
    flex: 1;
    height: 100%;
    background-color: #f5f5f5;
    text-align: center;
}

.footer {
    width: 100%;
    height: 120rpx;
    background-color: rgb(190, 190, 190);
    text-align: center;
}
</style>
