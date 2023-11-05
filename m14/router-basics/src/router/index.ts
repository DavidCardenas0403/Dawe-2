import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "@/views/Contact.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Search from "@/views/Search.vue";
import Resultat from "../views/Resultat.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/llista",
      name: "llista",
      component: ProductList,
    },
    {
      path: "/producte/:id",
      name: "producte",
      component: ProductDetail,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/resultat",
      name: "resultat",
      component: Resultat,
    },
  ],
});

export default router;
