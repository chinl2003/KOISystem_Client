import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CustomerPage from '@/pages/CustomerPage.vue'
import CompetitionPage from '@/pages/CompetitionPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import RegisterKoiFishPage from '@/pages/RegisterKoiFishPage.vue'
import ListKoiFishCustomerPage from '@/pages/ListKoiFishCustomerPage.vue'
import ListCompetitionPage from '@/pages/ListCompetitionPage.vue'
import ListRankCompetitionPage from '@/pages/ListRankCompetitionPage.vue'
import ListRoundCompetitionPage from '@/pages/ListRoundCompetitionPage.vue'
import ListFormatCompetitionPage from '@/pages/ListFormatCompetitionPage.vue'
import ListRewardCompetitionPage from '@/pages/ListRewardCompetitionPage.vue'
import VnPayCallBack from '@/pages/VnPayCallBack.vue'
import store from '@/store/store'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ListCompetitionCustomerPage from '@/pages/ListCompetitionCustomerPage.vue'

import ListRegisteKoiFishAdminPage from '@/pages/ListRegisteKoiFishAdminPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/competition',
    name: 'CompetitionPage',
    component: CompetitionPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/customer',
    meta: { requiresAuth: true, role: ['Member'] },
    children: [
      {
        path: '',
        name: 'CustomerHomePage',
        meta: { requiresAuth: true },
        component: HomePage
      },
      {
        path: 'wallet',
        name: 'CustomerPage',
        meta: { requiresAuth: true },
        component: CustomerPage
      },
      {
        path: 'register-koi-fish',
        name: 'RegisterKoiFishPage',
        component: RegisterKoiFishPage
      },
      {
        path: 'list-koi-fish',
        name: 'ListKoiFishCustomerPage',
        component: ListKoiFishCustomerPage
      },
      {
        path: 'list-competition',
        name: 'ListCompetitionPage',
        component: ListCompetitionPage
      },
      {
        path: 'list-rank-competition',
        name: 'ListRankCompetitionPage',
        component: ListRankCompetitionPage
      },
      {
        path: 'list-round-competition',
        name: 'ListRoundCompetitionPage',
        component: ListRoundCompetitionPage
      },
      {
        path: 'list-format-competition',
        name: 'ListFormatCompetitionPage',
        component: ListFormatCompetitionPage
      },
      {
        path: 'list-reward-competition',
        name: 'ListRewardCompetitionPage',
        component: ListRewardCompetitionPage
      },
      {
        path: '/vnpay/callback',
        name: 'VNPayCallBack',
        component: VnPayCallBack
      },
      {
        path: 'list-competition-customer',
        name: 'ListCompetitionCustomerPage',
        component: ListCompetitionCustomerPage
      }
    ]
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/list-koi-fish-admin',
    name: 'ListRegisteKoiFishAdminPage',
    component: ListRegisteKoiFishAdminPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(store.getters.isAuthenticated)
    if (!store.getters.isAuthenticated) {
      next({ name: 'Login' }) // Redirect to login if not authenticated
    } else {
      const userRoles = store.getters.roles
      const requiredRoles = to.meta.roles
      if (requiredRoles && !requiredRoles.some((role) => userRoles.includes(role))) {
        next({ name: 'Home' }) // Redirect to home if user lacks required role
      } else {
        next()
      }
    }
  } else {
    next()
  }
})
export default router
