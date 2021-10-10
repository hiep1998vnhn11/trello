import type { RouteRecordRaw } from 'vue-router'
import { Mp3Container } from '/@/container'
export default [
  {
    path: '/mp3',
    name: 'Mp3',
    component: Mp3Container,
    children: [
      {
        path: '',
        name: 'Mp3Index',
        component: () => import('/@/pages/mp3/index.vue'),
      },
      {
        path: 'ca-nhan',
        name: 'Mp3CaNhan',
        component: () => import('/@/pages/mp3/ca-nhan.vue'),
      },
      {
        path: 'the-loai',
        name: 'Mp3TheLoai',
        component: () => import('/@/pages/mp3/the-loai.vue'),
      },
      {
        path: 'theo-doi',
        name: 'Mp3TheoDoi',
        component: () => import('/@/pages/mp3/theo-doi.vue'),
      },
      {
        path: 'top-100',
        name: 'Mp3Top100',
        component: () => import('/@/pages/mp3/top-100.vue'),
      },
      {
        path: 'zing-chart',
        name: 'Mp3ZingChart',
        component: () => import('/@/pages/mp3/zing-chart.vue'),
      },
      {
        path: 'theo-doi',
        name: 'Mp3TheoDoi',
        component: () => import('/@/pages/mp3/theo-doi.vue'),
      },
      {
        path: 'mv',
        name: 'Mp3MV',
        component: () => import('/@/pages/mp3/mv.vue'),
      },
      {
        path: 'album/:path/:id.html',
        name: 'Mp3Album',
        component: () => import('/@/pages/mp3/test.vue'),
      },
      {
        path: 'bai-hat/:path/:id.html',
        name: 'Mp3Baihat',
        component: () => import('/@/pages/mp3/bai-hat.vue'),
      },
      {
        path: 'test',
        name: 'TrelloTest',
        component: () => import('/@/pages/discord/index.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
