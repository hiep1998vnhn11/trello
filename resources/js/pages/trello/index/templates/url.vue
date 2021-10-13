<template>{{ url }}</template>
<script lang="ts">
import { onMounted, ref, defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'TrelloTemplates',
  setup() {
    const route = useRoute()
    const url = computed(() => route.params.url)
    onMounted(() => {})
    return {
      url,
    }
  },
})
</script>
<style lang="scss" scoped></style>
