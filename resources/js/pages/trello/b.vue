<template>
  <div
    class="trello-b"
    :class="{
      'active-left': trelloSidebarLeftActive,
    }"
  >
    <TrelloSidebarLeft
      :expand="trelloSidebarLeftActive"
      @toggle="toggleSidebarLeft"
    />
    <router-view />
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import TrelloSidebarLeft from '/@/container/src/trello/SidebarLeft.vue'

export default defineComponent({
  name: 'TrelloBContainer',
  components: {
    TrelloSidebarLeft,
  },
  setup() {
    const trelloSidebarLeftActive = ref(true)
    const toggleSidebarLeft = () =>
      (trelloSidebarLeftActive.value = !trelloSidebarLeftActive.value)
    onMounted(() => {})
    return {
      trelloSidebarLeftActive,
      toggleSidebarLeft,
    }
  },
})
</script>
<style lang="scss" scoped>
.trello-b {
  padding-left: 40px;
  &.active-left {
    padding-left: $sidebar-width;
  }
}
</style>
