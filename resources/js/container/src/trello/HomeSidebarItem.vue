<template>
  <router-link
    v-slot="{ isExactActive, href, navigate }"
    custom
    :to="'/trello/templates' + item.slug"
  >
    <li
      class="sidebar-sticky__item"
      :class="{ active: isExactActive }"
      @click="navigate"
    >
      <a :href="href">
        <span>
          {{ item.name }}
        </span>
      </a>
    </li>
  </router-link>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, PropType } from 'vue'
import { HomeSidebarTemplate } from './types'
export default defineComponent({
  name: 'HomeSidebarLink',
  props: {
    item: {
      type: Object as PropType<HomeSidebarTemplate>,
      default() {
        return {}
      },
    },
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.sidebar-sticky__item {
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &.active {
    background: #e4f0f5;
    color: #0079bf;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 5px 10px;
  }
}
</style>
