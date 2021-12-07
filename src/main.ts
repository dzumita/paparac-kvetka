import { createApp } from "vue";
import Gulnya from "./Gulnya.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(Gulnya).use(store).use(router).mount("#gulnya");
