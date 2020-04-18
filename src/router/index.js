import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
import preloader from '@/helpers/preloader';
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
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await preloader.showWithDeley(300);

  if (to.matched.some((record) => record.meta.notProtected) || store.getters['auth/isLogin']) {
    preloader.hideWithDeley(400);
    return next();
  }

  return store.dispatch('auth/login').then(
    () => {
      preloader.hide();
      next();
    },
    () => {
      preloader.hide();
      next('/login');
    },
  );
});

export default router;
