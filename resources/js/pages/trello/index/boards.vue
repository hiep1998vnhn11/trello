<template>
  Boards
  <div class="flex">
    <div class="w-1/4">
      <BoardItem :board="{}"></BoardItem>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import BoardItem from '/@/components/Trello/BoardItem.vue'
export default defineComponent({
  name: 'TrelloBoards',
  components: {
    BoardItem,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped></style>
