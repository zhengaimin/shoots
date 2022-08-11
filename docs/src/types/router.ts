import { RouteRecordRaw, RouteMeta } from 'vue-router';

export enum EMeta {}

type ItemRouterMeta = RouteMeta & {
  /** 鉴权 */
  requiresAuth?: boolean;
};

export type MenuItemRouter = RouteRecordRaw & {
  meta: ItemRouterMeta;
}