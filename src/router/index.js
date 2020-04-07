import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'BlogItem',
    component: () => import('@/views/BlogItem.vue'),
  },
  {
    path: '/client/:slug',
    name: 'Client',
    component: () => import('@/views/Client.vue'),
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('@/views/Clients.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.dispatch('auth/login').then(
    () => {
      next();
    },
    () => {
      next('/login');
    },
  );
  store.dispatch('translations/getTrans', null, { root: true });
});

export default router;
