import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationShow from "../views/DestinationShow.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/destination/:id",
      name: "destination.show",
      component: DestinationShow,
    },
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: DestinationShow,
      props: (route) => ({ ...route.params, id: parseInt(route.params.id[0]) }),

      children: [
        {
          path: ":experienceSlug",
          name: "experience.show",
          component: () => import("../views/ExperienceShow.vue"),
        },
      ],
    },
    {
      path: "/destination/:id",
      name: "destination.show",
      component: DestinationShow,
    },
  ],
});

export default router;
