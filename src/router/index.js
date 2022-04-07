import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookingView from '../views/BookingView.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/booking',
    name: 'booking',
    component: BookingView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound, 
    meta: {
      title: 'Page not found'
    }
  },
    
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
