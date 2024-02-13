import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Consum from '../views/Consum.vue'
import DetallConsum from '../views/DetallConsum.vue'
import Tasques from '../views/Tasques.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/consum',
      name: 'consum',
      component: Consum
    },
    {
      path: '/consum/:id',
      name: 'detall-consum',
      component: DetallConsum
    },
    {
      path: '/tasques',
      name: 'tasques',
      component: Tasques
    }
  ]
})

export default router
