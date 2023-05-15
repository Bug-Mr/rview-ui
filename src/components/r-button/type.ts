import { ExtractPropTypes, PropType } from "vue";
interface Emits {
  (event?: "click"): void;
}
export type Types = "primary" | "warn" | "success" | "Info" | "error" | "default";
export type Size = "large" | "mini" | "default";
export const buttonProps = {
  types: {
    type: String as PropType<Types>,
  },
  plain: Boolean,
  size: {
    type: String as PropType<Size>,
  },
  round: Boolean,
  disabled: Boolean,
  loading: Boolean,
  formType: {
    type: String,
  },
  openType: {
    type: String,
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export { type Emits };
