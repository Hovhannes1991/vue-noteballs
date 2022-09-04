import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

export const pinia = createPinia();

import { router } from "./router";

import "./assets/main.css";

createApp(App).use(pinia).use(router).mount("#app");
