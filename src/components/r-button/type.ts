interface Emits {
    (event?: "click"): void;
}
export type Types = "primary" | "warning" | "success" | "Info" | 'default';
export type Size = "large" | "mini" | 'default';
export {
    type Emits,
}