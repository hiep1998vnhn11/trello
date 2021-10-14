import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './routes/auth'
import discordRoute from './routes/discord'
import trelloRoute from './routes/trello'
import mp3Route from './routes/mp3'
import socialRoute from './routes/social'
import appRoute from './routes/app'
import { createRouteGuard } from './guards'
const routes: RouteRecordRaw[] = [
  ...appRoute,
  ...authRoutes,
  ...discordRoute,
  ...trelloRoute,
  ...mp3Route,
  ...socialRoute,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('/@/pages/error/404.vue'),
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
export function setupRouter(app: App<Element>) {
  app.use(router)
  createRouteGuard(router)
}
