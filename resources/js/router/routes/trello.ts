import type { RouteRecordRaw } from 'vue-router'
import { TrelloContainer } from '/@/container'
export default [
  {
    path: '/trello',
    name: 'Trello',
    component: TrelloContainer,
    children: [
      {
        path: '',
        name: 'TrelloIndex',
        component: () => import('/@/pages/trello/index.vue'),
      },
      {
        path: 'boards',
        name: 'TrelloBoards',
        component: () => import('/@/pages/trello/index.vue'),
      },
      {
        path: 'b',
        name: 'TrelloB',
        component: () => import('/@/pages/trello/b.vue'),
        children: [
          {
            path: '',
            name: 'TrelloBIndex',
            component: () => import('/@/pages/trello/b/index.vue'),
          },
          {
            path: ':b_id',
            name: 'TrelloBBId',
            component: () => import('../../pages/trello/b/b_id.vue'),
          },
        ],
      },
      {
        path: ':url',
        name: 'TrelloUrl',
        component: () => import('/@/pages/trello/_url.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
