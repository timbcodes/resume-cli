import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _, next) => {
  const isAuthenticated = localStorage.getItem('jwtToken') !== null

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LandingPage' })
  } else {
    next()
  }
})

export default router
