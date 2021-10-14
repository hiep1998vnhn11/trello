import type { Router } from 'vue-router'
import { createAuthGuard } from './auth'
import { AxiosCanceler } from '/@/utils/http/axios/axiosCancel'
import nProgress from 'nprogress'

export function createRouteGuard(router: Router) {
  createProgressGuard(router)
  createAuthGuard(router)
  createHttpGuard(router)
  router.beforeResolve((to, from) => {})
}

function createHttpGuard(router: Router) {
  const axiosCanceler = new AxiosCanceler()
  router.beforeEach(async () => {
    await axiosCanceler?.removeAllPending()
    return true
  })
}

export function createProgressGuard(router: Router) {
  router.beforeEach(async () => {
    nProgress.start()
    return true
  })

  router.afterEach(async () => {
    nProgress.done()
    return true
  })
}
