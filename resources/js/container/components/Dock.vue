<template>
  <div class="dock">
    <router-link custom v-slot="{ navigate, href, isExactActive }" to="/">
      <a
        class="dock-item active"
        :class="{ current: isExactActive }"
        :href="href"
        @click="navigate"
      >
        <app-icon />
      </a>
    </router-link>
    <router-link
      v-for="item in dockApp"
      :key="item.pathPrefix"
      custom
      v-slot="{ navigate, href }"
      :to="item.pathPrefix"
    >
      <a
        class="dock-item"
        :class="{ current: path.startsWith(item.pathPrefix) }"
        :href="href"
        @click="navigate"
      >
        <app-icon />
      </a>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { dockApp } from './dock.data'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'Dock',
  setup() {
    const route = useRoute()
    const path = computed(() => route.fullPath)
    return { dockApp, path }
  },
})
</script>
<style lang="scss" scoped>
.dock {
  position: fixed;
  bottom: 5px;
  border-radius: 10px;
  display: flex;
  background-color: var(--content-bg);
  padding: 6px 3px;
  border: 1px solid var(--theme-bg-color);
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  min-height: 52px;
  min-width: 52px;
  &-item {
    margin: 0 3px;
    transition: all 0.3s ease-in-out;
    position: relative;
    &:hover {
      transform: scale(1.5) translateY(-10px);
      transition: all 0.3s ease-in-out;
      margin: 0 15px;
    }

    &.active {
      &::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        bottom: -10px;
        background: $primary-color;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2.5px;
      }
    }

    &.current {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px !important;
        bottom: -10px;
        background: $primary-color;
      }
    }
  }
}
</style>
