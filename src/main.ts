import { createApp } from "vue";
import { setupPinia } from "./store";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "./index.css";
const app = createApp(App);

app.use(router).use(setupPinia()).mount("#app");
