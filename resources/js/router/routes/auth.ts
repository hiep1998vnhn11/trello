import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    component: () => import('/@/container/src/Auth.vue'),
    meta: {
      requiredGuest: true,
    },
    name: 'AuthContainer',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('/@/pages/Auth/login.vue'),
        meta: {
          requiredGuest: true,
        },
      },
      {
        path: '/login1',
        name: 'Login',
        component: () => import('/@/pages/Auth/login1.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('/@/pages/Auth/register.vue'),
        meta: {
          requiredGuest: true,
        },
      },
    ],
  },
] as RouteRecordRaw[]
