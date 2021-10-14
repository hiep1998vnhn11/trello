import { toRaw, ref, nextTick } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'
import { useDesign } from '/@/hooks/web/useDesign'
import { useSortable } from '/@/hooks/web/useSortable'
import { useStore } from 'vuex'
import { isNullAndUnDef } from '/@/utils/is'
import { useRouter } from 'vue-router'

export function initAffixTabs(): string[] {
  const affixList = ref<RouteLocationNormalized[]>([])
  const store = useStore()
  const router = useRouter()
  /**
   * @description: Filter all fixed routes
   */
  function filterAffixTabs(routes: RouteLocationNormalized[]) {
    const tabs: RouteLocationNormalized[] = []
    routes &&
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          tabs.push(toRaw(route))
        }
      })
    return tabs
  }

  /**
   * @description: Set fixed tabs
   */
  function addAffixTabs(): void {
    const affixTabs = filterAffixTabs(
      router.getRoutes() as unknown as RouteLocationNormalized[]
    )
    affixList.value = affixTabs
    for (const tab of affixTabs) {
      store.dispatch('multuApp/addTab', {
        meta: tab.meta,
        name: tab.name,
        path: tab.path,
      } as unknown as RouteLocationNormalized)
    }
  }

  let isAddAffix = false

  if (!isAddAffix) {
    addAffixTabs()
    isAddAffix = true
  }
  return affixList.value
    .map((item) => item.meta?.title)
    .filter(Boolean) as string[]
}

export function useTabsDrag(affixTextList: string[]) {
  const { prefixCls } = useDesign('multiple-tabs')
  const store = useStore()

  nextTick(() => {
    const el = document.querySelectorAll(
      `.${prefixCls} .ant-tabs-nav > div`
    )?.[0] as HTMLElement
    const { initSortable } = useSortable(el, {
      filter: (e: ChangeEvent) => {
        const text = e?.target?.innerText
        if (!text) return false
        return affixTextList.includes(text)
      },
      onEnd: (evt) => {
        const { oldIndex, newIndex } = evt

        if (
          isNullAndUnDef(oldIndex) ||
          isNullAndUnDef(newIndex) ||
          oldIndex === newIndex
        ) {
          return
        }

        store.commit('multiApp/SORT_TABS', [oldIndex, newIndex])
      },
    })
    initSortable()
  })
}
