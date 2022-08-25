import { createRouter, createWebHistory, RouterOptions, Router } from 'vue-router';
import { MenuItemRouter } from '@/types/router';

// import {  } from '@/data/router/index';
import * as guideRouter from './guide';

const routes: Array<MenuItemRouter> = [
  /** 指引 */
  ...guideRouter.default,
];

const options: RouterOptions = {
  history: createWebHistory(),
  routes,
};

const router: Router = createRouter(options);

export default router;
