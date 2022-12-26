import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(autoAnimatePlugin).mount("#app");
