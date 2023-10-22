import { createRouter, createWebHistory } from "vue-router";
import LlistaPersonatges from "@/views/LlistaPersonatges.vue";
import Detall from "@/views/Detall.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "personatges",
            component: LlistaPersonatges,
        },
        {
            path: "/detall",
            name: "detall",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Detall,
        },
    ],
});

export default router;
