import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationShow from "../views/DestinationShow.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: DestinationShow,
    },
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: DestinationShow,
      props: (route) => ({
        ...route.params,
        id: parseInt(route.params.id as string),
      }),

      children: [
        {
          path: ":experienceSlug",
          name: "experience.show",
          props: (route) => ({
            ...route.params,
            id: parseInt(route.params.id as string),
          }),
          component: () => import("../views/ExperienceShow.vue"),
        },
      ],
    },
  ],
});

export default router;
