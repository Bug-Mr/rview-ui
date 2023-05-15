import { ExtractPropTypes, PropType } from "vue";
interface Emits {
  (event?: "click"): void;
}
export type Types =
  | "primary"
  | "warn"
  | "success"
  | "Info"
  | "error"
  | "default";
export type Size = "large" | "mini" | "default";
export type FormTypes = "submit" | "reset";
export type OpenTypes =
  | "feedback"
  | "share"
  | "getUserInfo"
  | "contact"
  | "getPhoneNumber"
  | "launchApp"
  | "openSetting"
  | "chooseAvatar"
  | "uploadDouyinVideo"
  | "im"
  | "getAuthorize"
  | "lifestyle"
  | "contactShare"
  | "openGroupProfile"
  | "openGuildProfile"
  | "openPublicProfile"
  | "shareMessageToFriend"
  | "addFriend"
  | "addColorSign"
  | "addGroupApp"
  | "addToFavorites"
  | "chooseAddress"
  | "chooseInvoiceTitle"
  | "login"
  | "subscribe"
  | "favorite"
  | "watchLater"
  | "openProfile";
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
  formType: String as PropType<FormTypes>,
  openType: String as PropType<OpenTypes>,
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export { type Emits };
