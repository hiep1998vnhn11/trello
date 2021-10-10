<template>
  <div class="avatar" :style="styleComputed">
    <span v-if="shortName">{{ shortName }}</span>
    <img v-else-if="src" :src="src" />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'Avatar',
  props: {
    size: {
      type: Number,
      default: 40,
    },
    name: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const styleComputed = computed(() => ({
      width: props.size + 'px',
      height: props.size + 'px',
    }))
    const shortName = computed(() => (props.name ? props.name[0] : null))
    return {
      styleComputed,
      shortName,
    }
  },
})
</script>
<style lang="scss" scoped>
.avatar {
  background: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
}
</style>
