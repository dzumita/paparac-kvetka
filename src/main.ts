import { createApp } from "vue";
import TheGulnya from "./TheGulnya.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(TheGulnya).use(store).use(router).mount("#gulnya");
