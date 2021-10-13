<template>
  <div
    :class="{
      dark: darkMode,
    }"
    class="app"
  >
    <router-view v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
    <app-button />
    <app-sidebar />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useDark } from '/@/hooks/app/useDark'
import AppButton from './components/AppButton.vue'
import AppSidebar from './components/AppSidebar.vue'
export default defineComponent({
  name: 'Container',
  components: {
    AppButton,
    AppSidebar,
  },
  setup() {
    const route = useRoute()
    const { darkMode, toggleDarkMode } = useDark()
    const transitionName = computed(() => route.meta.transitionName || 'fade')
    return { transitionName, darkMode, toggleDarkMode }
  },
})
</script>
<style lang="scss" scoped>
.app {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background: #d1dae3;

  &.dark {
    background: #091921;
  }
}
</style>
