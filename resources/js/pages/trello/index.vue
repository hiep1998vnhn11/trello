<template>
  <div class="trello-index">
    <HomeSidebar />
    <div class="all-board">
      <router-view> </router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import HomeSidebar from '/@/container/src/trello/HomeSidebar.vue'
export default defineComponent({
  components: {
    HomeSidebar,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.trello-index {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  .all-board {
    max-width: 825px;
    min-width: 288px;
    width: 100%;
  }
}
</style>
