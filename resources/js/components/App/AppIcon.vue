<template>
  <div class="app-icon">
    <img :src="icon" :width="size" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      default: 'app',
    },
    size: {
      type: Number,
      default: 40,
    },
  },
  setup(props) {
    const icon = computed(() => '/icons/app/icon-' + props.name + '.svg')
    const size = computed(() => props.size)
    return {
      icon,
      size,
    }
  },
})
</script>
<style lang="scss" scoped>
.app-icon {
  background: #fff;
  border-radius: 10px;
}
</style>
