import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/sass/_layout.scss";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import store from "./store/index";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(store);

app.mount("#app");
