<template>
    <view class="r-row">
        <slot></slot>
    </view>
</template>
<script lang="ts">
export default {
    // #ifdef MP-WEIXIN
    options: {
        virtualHost: true // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现，可使用flex布局
    },
    // #endif
}
</script>

<script lang="ts" setup>

const Props = defineProps({
    gutter: {
        type: [Number, String],
        default: 0 || '0'
    }
})

defineExpose({
    ...Props
})
</script>
<style lang="scss">
.r-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:10rpx;
}
</style>