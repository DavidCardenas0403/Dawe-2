import "./assets/main.css";

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import DetallsPokemon from "./components/DetallsPokemon.vue";

const routes = [
    { path: "/", component: App },
    { path: "/detall", component: DetallsPokemon },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount("#app");
