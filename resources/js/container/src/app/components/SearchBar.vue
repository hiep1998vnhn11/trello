<template>
  <div class="search-bar-container" ref="searchRef">
    <div class="search-bar-container-active" @click="onClickOpen">
      <div class="search-bar">
        <input
          type="text"
          :placeholder="$t('search')"
          @keydown.enter="handleSearch"
        />
      </div>
    </div>

    <div
      class="search-bar-container-content"
      :class="{
        active: active,
      }"
    >
      123
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, unref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'AppSearchBar',
  setup() {
    const searchRef = ref<HTMLDivElement>()
    const active = ref<boolean>(false)
    onClickOutside(searchRef, () => {
      if (!unref(active)) return
      active.value = false
    })
    const onClickOpen = () => {
      active.value = true
    }

    const handleSearch = () => {}
    onMounted(() => {})
    return {
      searchRef,
      onClickOpen,
      active,
      handleSearch,
    }
  },
})
</script>
<style lang="scss" scoped>
.search-bar-container {
  position: relative;
  &-active {
    cursor: pointer;
    display: flex;
  }
  &-content {
    &.active {
      display: block;
      transform: translateY(-10px);
    }
    top: calc(100% + 1rem);
    left: 0;
    display: none;
    position: absolute;
    transform: translateY(-20px);
    transition: all 150ms ease-in-out, transform 150ms ease-in-out;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: 0.75rem;
    background: #fff;
    z-index: 2222;
    min-width: 150px;
  }
}
</style>
