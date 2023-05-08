<template>
  <!-- #ifdef APP-NVUE -->
  <text
    :style="{ color: color, 'font-size': iconSize }"
    class="r-icons"
    @click="_onClick"
    >{{ unicode }}</text
  >
  <!-- #endif -->
  <!-- #ifndef APP-NVUE -->
  <text
    :style="{ color: color, 'font-size': iconSize }"
    class="r-icons"
    :class="['r-icon-' + type, customPrefix, customPrefix ? type : '']"
    @click="_onClick"
  ></text>
  <!-- #endif -->
</template>

<script lang="ts" setup>
import { computed } from "vue";
import icons from "./icons";
const getVal = (val: number | string) => {
  const reg = /^[0-9]*$/g;
  return typeof val === "number" || reg.test(val) ? val + "px" : val;
};
// #ifdef APP-NVUE
var domModule = weex.requireModule("dom");
import iconUrl from "../styles/icons/rview-icon.ttf";
domModule.addRule("fontFace", {
  fontFamily: "ricon",
  src: "url('" + iconUrl + "')",
});
// #endif

/**
 * Icons 图标
 * @property {Number} size 图标大小
 * @property {String} type 图标图案，参考示例
 * @property {String} color 图标颜色
 * @property {String} customPrefix 自定义图标
 * @event {Function} click 点击 Icon 触发事件
 */

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "#333333",
  },
  size: {
    type: [Number, String],
    default: 30 || "30",
  },
  customPrefix: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["click"]);

const iconsList: any = icons;
const unicode = computed(() => {
  let code = props.type;
  if (code) {
    return unescape(`%r-icon-${iconsList[code]}`);
  }
  return "";
});
const iconSize = computed(() => {
  return getVal(props.size);
});

function _onClick() {
  emits("click");
}
</script>

<style lang="scss" scoped>
.r-icons {
  font-family: ricon;
  text-decoration: none;
  text-align: center;
}
</style>
