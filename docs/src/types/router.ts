import { RouteRecordRaw, RouteMeta } from 'vue-router';

/** 路由 meta */
type ItemRouterMeta = RouteMeta & {
  /** 鉴权 */
  requiresAuth?: boolean;
  /** layout */
  layout?: 'TabLayout';
  /** 标题 */
  title?: string;
};

export type MenuItemRouter = RouteRecordRaw & {
  meta: ItemRouterMeta;
}