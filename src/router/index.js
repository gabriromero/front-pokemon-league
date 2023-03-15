import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CombateView from '../views/CombateView.vue'
import NormasView from '../views/NormasView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/combate',
    name: 'combate',
    component: CombateView
  },
  {
    path: '/normas',
    name: 'normas',
    component: NormasView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
