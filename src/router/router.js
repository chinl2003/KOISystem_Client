import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CustomerPage from '@/pages/CustomerPage.vue'
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
  }
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