<template>
    <view :class="'r-col r-col-' + span" :style="{
        width: `calc(100%/24 * ${span} - ${gutter}rpx)`,
    }">
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
import { computed, getCurrentInstance, nextTick } from "vue"
const { proxy }: any = getCurrentInstance()
const gutter = computed(() => {
    // #ifdef H5
    return proxy.$parent.$parent.gutter
    // #endif
    return proxy.$parent.gutter

})
nextTick(() => {
    console.log(proxy.$parent.$parent, '88888')
    // return proxy.$parent.gutter
})
defineProps({
    span: {
        type: Number,
        default: 1
    }
})
</script>

<style lang="scss">
// .r-col {
//     flex: 1;
// }

// .r-col-0 {
//     width: 0;
// }

// .r-col-1 {
//     width: calc(100%/24);
// }

// .r-col-2 {
//     width: calc(100%/24 * 2);
// }

// .r-col-3 {
//     width: calc(100%/24 * 3);
// }

// .r-col-4 {
//     width: calc(100%/24 * 4);
// }

// .r-col-5 {
//     width: calc(100%/24 * 5);
// }

// .r-col-6 {
//     width: calc(100%/24 * 6);
// }

// .r-col-7 {
//     width: calc(100%/24 * 7);
// }

// .r-col-8 {
//     width: calc(100%/24 * 8);
// }

// .r-col-9 {
//     width: calc(100%/24 * 9);
// }

// .r-col-10 {
//     width: calc(100%/24 * 10);
// }

// .r-col-11 {
//     width: calc(100%/24 * 11);
// }

// .r-col-12 {
//     width: calc(100%/24 * 12);
// }

// .r-col-13 {
//     width: calc(100%/24 * 13);
// }

// .r-col-14 {
//     width: calc(100%/24 * 14);
// }

// .r-col-15 {
//     width: calc(100%/24 * 15);
// }

// .r-col-16 {
//     width: calc(100%/24 * 16);
// }

// .r-col-17 {
//     width: calc(100%/24 * 17);
// }

// .r-col-18 {
//     width: calc(100%/24 * 18);
// }

// .r-col-19 {
//     width: calc(100%/24 * 19);
// }

// .r-col-20 {
//     width: calc(100%/24 * 20);
// }

// .r-col-21 {
//     width: calc(100%/24 * 21);
// }

// .r-col-22 {
//     width: calc(100%/24 * 22);
// }

// .r-col-23 {
//     width: calc(100%/24 * 23);
// }

// .r-col-24 {
//     width: calc(100%/24 * 24);
// }
</style>