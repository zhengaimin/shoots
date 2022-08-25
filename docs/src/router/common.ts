// type
import { MenuItemRouter } from '@/types/router';

// import { SHOOTS_GUIDE_PREFIX } from '@/data/router';
// import { SHOOTS_GUIDE_PREFIX_NAME } from '@/data/router/index.name';

const commonRouter: Array<MenuItemRouter> = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/common/NotFound.vue'),
    meta: {
      title: '找不到网页',
    },
  },
];


export default commonRouter;
