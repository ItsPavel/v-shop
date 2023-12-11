import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import { createYmaps } from "vue-yandex-maps";

store.dispatch("productsStore/load").then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .use(bootstrap)
    .use(createYmaps)
    .use(createYmaps)
    .mount("#app");
});

store.dispatch("cartStore/load");
store.dispatch("likeStore/load");
