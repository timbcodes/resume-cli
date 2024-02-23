import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage'
import MainDash from '@/views/MainDash'
import NewUserSetup from '@/views/NewUserSetup'

const routes = [
  {
    path: '/',
    name: 'MainDash',
    component: MainDash,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-user-setup',
    name: 'NewUserSetup',
    component: NewUserSetup,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'LandingPage',
    component: LandingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _, next) => {
  const isAuthenticated = localStorage.getItem('jwtToken') !== null
  if (to.name === 'LandingPage' && isAuthenticated) {
    next({ name: 'MainDash' })
  } else if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'LandingPage' })
  } else {
    next()
  }
})

export default router
