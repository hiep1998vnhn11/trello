<template>
  <div class="app-sidebar-item">123</div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'AppSidebarItem',
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.app-sidebar-item {
  width: 100%;
  border-radius: 12px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 15px;
}
</style>
