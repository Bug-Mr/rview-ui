import type { UserConfig } from "vitepress";
import { routers } from "./router";
export const config: UserConfig = {
  title: "rview-ui",
  description: "a Vue 3 based component library for designers and developers",
  themeConfig: {
    logo: "/images/vue.svg",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-PRESENT rview-ui and rview-ui contributors",
    },
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    nav: [
      { text: "指南", link: "/guild/design" },
      { text: "组件", link: "/component/button/button" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Bug-Mr/rview-ui" },
    ],
    sidebar: routers,
  },
};

export default config;
