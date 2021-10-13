import type { RouteRecordRaw } from 'vue-router'
import { SocialContainer } from '/@/container'
export default [
  {
    path: '/social',
    name: 'Social',
    component: SocialContainer,
    children: [
      {
        path: '',
        name: 'SocialIndex',
        component: () => import('/@/pages/social/index.vue'),
      },
    ],
  },
  {
    path: '/wheel',
    component: () => import('/@/pages/wheel.vue'),
  },
  {
    path: '/product',
    component: () => import('/@/pages/product.vue'),
  },
  {
    path: '/project',
    component: () => import('/@/pages/project.vue'),
  },
] as RouteRecordRaw[]
