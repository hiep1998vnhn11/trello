<template>
  <div class="trello">
    <TrelloNavbar />
    <perfect-scrollbar ref="trelloScrollbar">
      <router-view></router-view>
    </perfect-scrollbar>
  </div>
</template>
<script lang="ts">
import { onMounted, defineComponent, ref } from 'vue'
import { useFavicon } from '@vueuse/core'
import TrelloNavbar from './trello/Navbar.vue'
export default defineComponent({
  name: 'Trello',
  components: {
    TrelloNavbar,
  },
  setup() {
    const favicon = useFavicon()
    const trelloScrollbar = ref<any>()
    onMounted(() => {
      favicon.value = '/images/trello/favicon.ico'
    })

    return {
      trelloScrollbar,
    }
  },
})
</script>
<style lang="scss" scoped>
.trello {
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-top: 50px;
  .ps {
    height: 100%;
    width: 100%;
  }
}
</style>
