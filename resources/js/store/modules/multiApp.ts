import type {
  RouteLocationNormalized,
  RouteLocationRaw,
  Router,
} from 'vue-router'
import { unref } from 'vue'
import { useGo, useRedo } from '/@/hooks/web/usePage'
import { Persistent } from '/@/utils/cache/persistent'

import { PageEnum } from '/@/enums/pageEnum'
import { getRawRoute } from '/@/utils'
import { MULTIPLE_TABS_KEY } from '/@/enums/cacheEnum'
import type { Commit, Dispatch } from 'vuex'

export interface MultipleTabState {
  cacheTabList: Set<string>
  tabList: RouteLocationNormalized[]
  lastDragEndIndex: number
}

type ActionArg = {
  commit: Commit
  state: MultipleTabState
  dispatch: Dispatch
  getters: {
    getTabList: RouteLocationNormalized[]
    getCachedTabList: string[]
    getLastDragEndIndex: number
  }
}

function handleGotoPage(router: Router) {
  const go = useGo(router)
  go(unref(router.currentRoute).path, true)
}

const state = (): MultipleTabState => ({
  cacheTabList: new Set(),
  tabList: Persistent.getLocal(MULTIPLE_TABS_KEY) || [],
  lastDragEndIndex: 0,
})

const getters = {
  getTabList(state: MultipleTabState): RouteLocationNormalized[] {
    return state.tabList
  },
  getCachedTabList(state: MultipleTabState): string[] {
    return Array.from(state.cacheTabList)
  },
  getLastDragEndIndex(state: MultipleTabState): number {
    return state.lastDragEndIndex
  },
}
const actions = {
  async updateCacheTab({
    commit,
    state,
  }: {
    commit: Commit
    state: MultipleTabState
  }) {
    const cacheMap: Set<string> = new Set()

    for (const tab of state.tabList) {
      const item = getRawRoute(tab)
      // Ignore the cache
      const needCache = !item.meta?.ignoreKeepAlive
      if (!needCache) {
        continue
      }
      const name = item.name as string
      cacheMap.add(name)
    }
    commit('SET_CACHE_TAB_LIST', cacheMap)
  },
  /**
   * Update the cache according to the currently opened tabs
   */

  /**
   * Refresh tabs
   */
  async refreshPage({ commit, state, getters }: ActionArg, router: Router) {
    const { currentRoute } = router
    const route = unref(currentRoute)
    const name = route.name

    const findTab = getters.getCachedTabList.find((item) => item === name)
    if (findTab) {
      commit('DELETE_TAB', findTab)
    }
    const redo = useRedo(router)
    await redo()
  },

  goToPage({ state }: ActionArg, router: Router) {
    const go = useGo(router)
    const len = state.tabList.length
    const { path } = unref(router.currentRoute)
    let toPath: PageEnum | string = PageEnum.BASE_HOME
    if (len > 0) {
      const page = state.tabList[len - 1]
      const p = page.fullPath || page.path
      if (p) {
        toPath = p
      }
    }
    // Jump to the current page and report an error
    path !== toPath && go(toPath as PageEnum, true)
  },

  async addTab(
    { commit, state, dispatch }: ActionArg,
    route: RouteLocationNormalized
  ) {
    const { path, name, fullPath, params, query } = getRawRoute(route)
    // 404  The page does not need to add a tab
    if (path === PageEnum.ERROR_PAGE || path === PageEnum.BASE_LOGIN || !name) {
      return
    }

    let updateIndex = -1
    // Existing pages, do not add tabs repeatedly
    const tabHasExits = state.tabList.some((tab, index) => {
      updateIndex = index
      return (tab.fullPath || tab.path) === (fullPath || path)
    })

    // If the tab already exists, perform the update operation
    if (tabHasExits) {
      const curTab = state.tabList[updateIndex]
      if (!curTab) {
        return
      }
      curTab.params = params || curTab.params
      curTab.query = query || curTab.query
      curTab.fullPath = fullPath || curTab.fullPath
      commit('SPLICE_TAB_LIST', [updateIndex, 1, curTab])
    } else {
      // Add tab
      commit('ADD_TAB', route)
    }
    dispatch('updateCacheTab')
    Persistent.setLocal(MULTIPLE_TABS_KEY, state.tabList)
  },

  async closeTab(
    { state }: ActionArg,
    {
      tab,
      router,
    }: {
      tab: RouteLocationNormalized
      router: Router
    }
  ) {
    const getToTarget = (tabItem: RouteLocationNormalized) => {
      const { params, path, query } = tabItem
      return {
        params: params || {},
        path,
        query: query || {},
      }
    }

    const close = (route: RouteLocationNormalized) => {
      const { fullPath, meta: { affix } = {} } = route
      if (affix) {
        return
      }
      const index = state.tabList.findIndex(
        (item) => item.fullPath === fullPath
      )
      index !== -1 && state.tabList.splice(index, 1)
    }

    const { currentRoute, replace } = router

    const { path } = unref(currentRoute)
    if (path !== tab.path) {
      // Closed is not the activation tab
      close(tab)
      return
    }

    // Closed is activated atb
    let toTarget: RouteLocationRaw = {}

    const index = state.tabList.findIndex((item) => item.path === path)

    // If the current is the leftmost tab
    if (index === 0) {
      // There is only one tab, then jump to the homepage, otherwise jump to the right tab
      if (state.tabList.length === 1) {
        toTarget = PageEnum.BASE_HOME
      } else {
        //  Jump to the right tab
        const page = state.tabList[index + 1]
        toTarget = getToTarget(page)
      }
    } else {
      // Close the current tab
      const page = state.tabList[index - 1]
      toTarget = getToTarget(page)
    }
    close(currentRoute.value)
    replace(toTarget)
  },

  // Close according to key
  async closeTabByKey(
    { state, dispatch }: ActionArg,
    {
      key,
      router,
    }: {
      key: string
      router: Router
    }
  ) {
    const index = state.tabList.findIndex(
      (item) => (item.fullPath || item.path) === key
    )
    index !== -1 && dispatch('closeTab', { tab: state.tabList[index], router })
  },
  // Close the tab on the right and jump
  async closeLeftTabs(
    { commit, state, dispatch }: ActionArg,
    route: RouteLocationNormalized,
    router: Router
  ) {
    const index = state.tabList.findIndex((item) => item.path === route.path)

    if (index > 0) {
      const leftTabs = state.tabList.slice(0, index)
      const pathList: string[] = []
      for (const item of leftTabs) {
        const affix = item?.meta?.affix ?? false
        if (!affix) {
          pathList.push(item.fullPath)
        }
      }
      commit('BULK_CLOSE_TABS', pathList)
    }
    dispatch('updateCacheTab')

    handleGotoPage(router)
  },

  // Close the tab on the left and jump
  async closeRightTabs(
    { commit, state, dispatch }: ActionArg,
    route: RouteLocationNormalized,
    router: Router
  ) {
    const index = state.tabList.findIndex(
      (item) => item.fullPath === route.fullPath
    )

    if (index >= 0 && index < state.tabList.length - 1) {
      const rightTabs = state.tabList.slice(index + 1, state.tabList.length)

      const pathList: string[] = []
      for (const item of rightTabs) {
        const affix = item?.meta?.affix ?? false
        if (!affix) {
          pathList.push(item.fullPath)
        }
      }
      commit('BULK_CLOSE_TABS', pathList)
    }
    dispatch('updateCacheTab')

    handleGotoPage(router)
  },

  async closeAllTab(
    { commit, state, getters, dispatch }: ActionArg,
    router: Router
  ) {
    commit('CLOSE_ALL_TAB')
    commit('CLEAR_CACHE_TABS')
    dispatch('goToPage', router)
  },

  /**
   * Close other tabs
   */
  async closeOtherTabs(
    { commit, state, getters, dispatch }: ActionArg,
    route: RouteLocationNormalized,
    router: Router
  ) {
    const closePathList = state.tabList.map((item) => item.fullPath)

    const pathList: string[] = []

    for (const path of closePathList) {
      if (path !== route.fullPath) {
        const closeItem = state.tabList.find((item) => item.path === path)
        if (!closeItem) {
          continue
        }
        const affix = closeItem?.meta?.affix ?? false
        if (!affix) {
          pathList.push(closeItem.fullPath)
        }
      }
    }
    commit('BULK_CLOSE_TABS', pathList)
    dispatch('updateCacheTab')

    handleGotoPage(router)
  },

  /**
   * Set tab's title
   */
  async setTabTitle(
    { commit, state, getters, dispatch }: ActionArg,
    title: string,
    route: RouteLocationNormalized
  ) {
    const findTab = getters.getTabList.find((item) => item === route)
    if (findTab) {
      findTab.meta.title = title
      await dispatch('updateCacheTab')
    }
  },
}

const mutations = {
  CLEAR_CACHE_TABS: function (state: MultipleTabState) {
    state.cacheTabList = new Set()
  },
  RESET_STATE: function (state: MultipleTabState): void {
    state.tabList = []
    state.cacheTabList = new Set()
  },
  SET_CACHE_TAB_LIST: function (state: MultipleTabState, value: Set<string>) {
    state.cacheTabList = value
  },
  DELETE_TAB: function (state: MultipleTabState, findTab: string) {
    state.cacheTabList.delete(findTab)
  },
  ADD_TAB: function (state: MultipleTabState, route: RouteLocationNormalized) {
    state.tabList.push(route)
  },
  SPLICE_TAB_LIST: function (
    state: MultipleTabState,
    [arg1, arg2, arg3]: [number, number, RouteLocationNormalized]
  ) {
    state.tabList.splice(arg1, arg2, arg3)
  },
  CLOSE_ALL_TAB: function (state: MultipleTabState) {
    state.tabList = state.tabList.filter((item) => item?.meta?.affix ?? false)
  },
  BULK_CLOSE_TABS: function (state: MultipleTabState, pathList: string[]) {
    state.tabList = state.tabList.filter(
      (item) => !pathList.includes(item.fullPath)
    )
  },
  SORT_TAB: function (state: MultipleTabState, [oldIndex, newIndex]: number[]) {
    const currentTab = state.tabList[oldIndex]
    state.tabList.splice(oldIndex, 1)
    state.tabList.splice(newIndex, 0, currentTab)
    state.lastDragEndIndex = state.lastDragEndIndex + 1
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
