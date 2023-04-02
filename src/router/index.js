import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CombateView from '../views/CombateView.vue'
import NormasView from '../views/NormasView.vue'
import PerfilView from '../views/PerfilView.vue'
import { getMyselfProfile } from '@/api/shared'

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

router.beforeEach(async (to, from) => {
  const protectedRoutes = ['combate', 'perfil']
  if (protectedRoutes.includes(to.name)) {
    const accessToken = localStorage.getItem('access_token');
    let isAuthenticated = false
    try{
      let response = await getMyselfProfile(accessToken)
      isAuthenticated = response && response?.status == 200
    } catch(err){
      console.log(err);
    }
    
    if (
      !isAuthenticated &&
      to.name !== 'home'
    ) {
      return { name: 'home' }
    }
  }
})

export default router
