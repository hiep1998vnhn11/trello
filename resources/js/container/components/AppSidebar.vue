<template>
  <transition name="sidebar-fade">
    <aside v-show="sidebar" ref="sidebarRef" class="app-sidebar">
      <div class="app-sidebar-header">
        <toggle-dark-mode />
        <i class="icon ic-close" @click="toggleSidebar" />
      </div>
      <perfect-scrollbar>
        <clock class="m-b-2" />
        <app-sidebar-item></app-sidebar-item>
      </perfect-scrollbar>
    </aside>
  </transition>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, computed, unref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStore } from 'vuex'
import { Clock, ToggleDarkMode } from '/@/components/Advance'
import AppSidebarItem from './AppSidebarItem.vue'
export default defineComponent({
  name: 'AppSidebar',
  components: {
    Clock,
    ToggleDarkMode,
    AppSidebarItem,
  },
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.sidebar)
    const sidebarRef = ref<HTMLDivElement>()
    onClickOutside(sidebarRef, () => {
      if (!unref(sidebar)) return
      toggleSidebar()
    })
    const toggleSidebar = () => store.dispatch('toggleSidebar')
    onMounted(() => {})
    return { sidebarRef, sidebar, toggleSidebar }
  },
})
</script>
<style lang="scss" scoped>
.sidebar-fade-enter-active {
  transition: all 0.3s ease-in-out;
}
.sidebar-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.sidebar-fade-enter, .sidebar-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX($app-sidebar-width);
}
// .dark {
//   .app-sidebar {
//     background: #222;
//     color: #e2f5f8;
//   }
// }
.app-sidebar {
  width: $app-sidebar-width;
  height: 100vh;
  top: 0;
  right: 0;
  position: fixed;
  background: rgba(255, 255, 255, 0.1);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 1200;
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-left: solid 1px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  .ps {
    height: calc(100% - 50px);
    overflow-x: hidden;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 10px;
    i {
      cursor: pointer;
    }
  }
}
</style>
