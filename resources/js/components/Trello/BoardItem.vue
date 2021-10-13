<template>
  <div class="board-item">
    <div>123</div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'BoardItem',
  props: {
    board: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup(props) {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.board-item {
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.1);
}
</style>
