<template>
  <button class="r-button" :class="className" :disabled="disabled" :loading="loading" @click="emits('click')"
    :form-type="formType" :open-type="openType">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ComputedRef, computed, PropType } from "vue";
import { Emits } from "./type";
export type Types = "primary" | "warning" | "success" | "Info" | 'default';
export type Size = "large" | "mini" | 'default';
const props = defineProps({
  types: {
    type: String as PropType<Types>,
  },
  plain: {
    type: Boolean,
  },
  size: {
    type: String as PropType<Size>,
  },
  round: {
    type: Boolean,
  },
  disabled: {
    type: Boolean
  },
  loading: {
    type: Boolean
  },
  formType: {
    type: String,
    default: ""
  },
  openType: {
    type: String,
    default: ""
  }
})
const emits: Emits = defineEmits();

const className: ComputedRef<string> = computed(() => {
  if (props.plain) {
    return `r-button--plain r-button--plain--${props.types || "default"
      } r-button--size-${props.size || "default"} ${props.round ? "r-button--round" : ""
      } ${props.disabled && "r-button--disabled"}`;
  } else {
    return `r-button--${props.types || "default"} r-button--size-${props.size || "default"
      } ${props.round ? "r-button--round" : ""} ${props.disabled && "r-button--disabled"
      }`;
  }

});
</script>

<style lang="scss" scoped>
$r-color-primary: #007aff;
$r-color-success: #4cd964;
$r-color-warn: #f0ad4e;
$r-color-error: #dd524d;
$r-color-default: #9c9c9c;

.r-button {
  height: max-content;
  text-align: center;
  line-height: normal;
  display: inline-block;
  margin: 10px;

  &::after {
    border: 0;
  }

  &--primary {
    color: #fff !important;
    background-color: $r-color-primary !important;
    border-color: $r-color-primary !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-primary;
    }
  }

  &--success {
    color: #fff !important;
    background-color: $r-color-success !important;
    border-color: $r-color-success !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-success;
    }
  }

  &--warn {
    color: #fff !important;
    background-color: $r-color-warn !important;
    border-color: $r-color-warn !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-warn;
    }
  }

  &--error {
    color: #fff !important;
    background-color: $r-color-error !important;
    border-color: $r-color-error !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-error;
    }
  }

  &--default {
    color: $r-color-default !important;
    border: 2rpx $r-color-default solid !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-default;
    }
  }

  &--size-large {
    width: calc(100% / 2);
    padding: 18rpx 38rpx;
    font-size: 28rpx;
  }

  &--size-default {
    width: calc(100% / 4);
    padding: 14rpx 30rpx;
    font-size: 28rpx;
  }

  &--size-mini {
    width: calc(100% / 6);
    padding: 8rpx 16rpx;
    font-size: 20rpx;
  }

  &--round {
    border-radius: 40rpx;
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.r-button--plain {
  background-color: transparent !important;

  &--primary {
    color: $r-color-primary !important;
    border: 2rpx $r-color-primary solid !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-primary;
    }
  }

  &--success {
    color: $r-color-success !important;
    border: 2rpx $r-color-success solid !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-success;
    }
  }

  &--warn {
    color: $r-color-warn !important;
    border: 2rpx $r-color-warn solid !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-warn;
    }
  }

  &--error {
    color: $r-color-error !important;
    border: 2rpx $r-color-error solid !important;

    &:active {
      box-shadow: 2rpx 4rpx 10rpx 0rpx $r-color-warn;
    }
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
