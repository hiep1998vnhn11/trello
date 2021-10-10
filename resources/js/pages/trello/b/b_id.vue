<template>
  {{ id }}
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'TrelloBBId',
  setup() {
    const route = useRoute()
    const id = computed(() => route.params.b_id)
    return {
      id,
    }
  },
})
</script>
<style lang="scss" scoped></style>
