// type
import { MenuItemRouter } from '@/types/router';

import { SHOOTS_GUIDE_PREFIX } from '@/data/router';
import { SHOOTS_GUIDE_PREFIX_NAME } from '@/data/router/index.name';

const guideRouter: Array<MenuItemRouter> = [
  {
    path: SHOOTS_GUIDE_PREFIX,
    name: SHOOTS_GUIDE_PREFIX_NAME,
    component: () => import('@/views/guide/Index.vue'),
    meta: {
      title: 'Shoots 指引',
    },
  },
];


export default guideRouter;
