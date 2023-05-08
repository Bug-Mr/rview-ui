import { createSSRApp } from "vue";
import App from "./App.vue";
import RviewUi from "./components/index";

export function createApp() {
  const app = createSSRApp(App);
  app.use(RviewUi);
  return {
    app,
  };
}
