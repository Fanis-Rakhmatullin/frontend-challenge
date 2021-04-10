import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import('../views/Home'),
      header: () => import('../components/HeaderComponent'),
    },
  },
  {
    path: '/liked',
    name: 'Liked',
    components: {
      default: () => import('../views/Liked'),
      header: () => import('../components/HeaderComponent'),
    },
  },
];

const router = new VueRouter({ routes });

export default router;
