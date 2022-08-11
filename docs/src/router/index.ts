import { createRouter, createWebHashHistory, RouterOptions, Router } from 'vue-router';
import { MenuItemRouter } from '@/types/router';

const routes: Array<MenuItemRouter> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HelloWorld.vue'),
    meta: {
      requiresAuth: false
    },
  },
];

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
};

const router: Router = createRouter(options);

export default router;
