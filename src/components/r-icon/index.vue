<template>
	<!-- #ifdef APP-NVUE -->
	<text :style="{ color: color, 'font-size': iconSize }" class="uni-icons" @click="_onClick">{{ unicode }}</text>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<text :style="{ color: color, 'font-size': iconSize }" class="uni-icons"
		:class="['r-icon-' + type, customPrefix, customPrefix ? type : '']" @click="_onClick"></text>
	<!-- #endif -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import icons from './icons';
const getVal = (val: number | string) => {
	const reg = /^[0-9]*$/g
	return (typeof val === 'number' || reg.test(val)) ? val + 'px' : val;
}
// #ifdef APP-NVUE
var domModule = weex.requireModule('dom');
import iconUrl from './uniicons.ttf'
domModule.addRule('fontFace', {
	'fontFamily': "uniicons",
	'src': "url('" + iconUrl + "')"
});
// #endif
const props = defineProps({
	type: {
		type: String,
		default: ''
	},
	color: {
		type: String,
		default: '#333333'
	},
	size: {
		type: [Number, String],
		default: 16
	},
	customPrefix: {
		type: String,
		default: ''
	}
})

const unicode = computed(() => {
	let code = icons.glyphs.find(v => v.font_class === props.type)
	if (code) {
		return unescape(`%u${code.unicode}`)
	}
	return ''
})

const iconSize = computed(() => {
	return getVal(props.size)
})
const emits = defineEmits(["click"])
function _onClick() {
	emits("click")
}

</script>

<style lang="scss" scoped>
@import url("../styles/index.css");

.uni-icons {
	font-family: iconfont;
	text-decoration: none;
	text-align: center;
}
</style>
