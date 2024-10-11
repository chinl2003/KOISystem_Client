import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CustomerPage from '@/pages/CustomerPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import RegisterKoiFishPage from '@/pages/RegisterKoiFishPage.vue'
import ListKoiFishCustomerPage from '@/pages/ListKoiFishCustomerPage.vue'
import ListCompetitionPage from '@/pages/ListCompetitionPage.vue'
import ListRankCompetitionPage from '@/pages/ListRankCompetitionPage.vue'
import ListRoundCompetitionPage from '@/pages/ListRoundCompetitionPage.vue'
import ListFormatCompetitionPage from '@/pages/ListFormatCompetitionPage.vue'
import ListRewardCompetitionPage from '@/pages/ListRewardCompetitionPage.vue'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/customer',
    name: 'CustomerPage',
    component: CustomerPage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/register-koi-fish',
    name: 'RegisterKoiFishPage',
    component: RegisterKoiFishPage
  },
  {
    path: '/list-koi-fish',
    name: 'ListKoiFishCustomerPage',
    component: ListKoiFishCustomerPage
  },
  {
    path: '/list-competition',
    name: 'ListCompetitionPage',
    component: ListCompetitionPage
  },
  {
    path: '/list-rank-competition',
    name: 'ListRankCompetitionPage',
    component: ListRankCompetitionPage
  },
  {
    path: '/list-round-competition',
    name: 'ListRoundCompetitionPage',
    component: ListRoundCompetitionPage
  },
  {
    path: '/list-format-competition',
    name: 'ListFormatCompetitionPage',
    component: ListFormatCompetitionPage
  },{
    path: '/list-reward-competition',
    name: 'ListRewardCompetitionPage',
    component: ListRewardCompetitionPage
  },
]

const router = createRouter({
  history: createWebHistory('/'), 
  routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/']; 
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/');
  } else {
    next();
  }
});
export default router                                     