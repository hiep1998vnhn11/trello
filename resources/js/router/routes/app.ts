import type { RouteRecordRaw } from 'vue-router'
import { AppContainer } from '/@/container'
export default [
  {
    path: '/',
    name: 'App',
    component: AppContainer,
    children: [
      {
        path: '',
        name: 'DiscordIndex',
        component: () => import('/@/pages/index.vue'),
      },
      {
        path: 'app',
        name: 'AppPage',
        component: () => import('/@/pages/app.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
