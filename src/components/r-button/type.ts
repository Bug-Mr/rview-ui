import { ExtractPropTypes, PropType } from "vue";
interface Emits {
  (e?: "click"): void;
  (e?: "getphonenumber", event?: any): void;
  (e?: "getuserinfo", event?: any): void;
  (e?: "error", event?: any): void;
  (e?: "opensetting", event?: any): void;
  (e?: "launchapp", event?: any): void;
  (e?: "contact", event?: any): void;
  (e?: "chooseavatar", event?: any): void;
  (e?: "chooseaddress", event?: any): void;
  (e?: "chooseinvoicetitle", event?: any): void;
  (e?: "subscribe", event?: any): void;
  (e?: "login", event?: any): void;
  (e?: "im", event?: any): void;
}
export type Type =
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
  type: {
    type: String as PropType<Type>,
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
