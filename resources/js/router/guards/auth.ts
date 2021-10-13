import { Router } from 'vue-router'
import { store } from '/@/store'
export function createAuthGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.getters['user/isLogin'])
      return next('/login')
    if (to.meta.requiredGuest && store.getters['user/isLogin']) return next('/')
    return next()
  })
}
