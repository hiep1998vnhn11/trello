<template>
  <div class="user-dropdown" ref="dropdownRef">
    <div class="user-dropdown-active" @click="onClickOpen">
      <img
        class="profile-img"
        src="/user.webp"
        :alt="currentUser ? currentUser.name : 'user'"
      />
    </div>

    <div
      class="user-dropdown-content"
      :class="{
        active: active,
      }"
    >
      123

      <toggle-dark-mode />
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, computed, unref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useStore } from 'vuex'
import { ToggleDarkMode } from '/@/components/Advance'
import type { User } from '/#/app'
export default defineComponent({
  name: 'UserDropdown',
  components: { ToggleDarkMode },
  setup() {
    const store = useStore()
    const active = ref(false)
    const dropdownRef = ref<HTMLDivElement>()
    const currentUser = computed<User>(() => store.getters['user/currentUser'])
    onClickOutside(dropdownRef, () => {
      if (!unref(active)) return
      active.value = false
    })
    const onClickOpen = () => {
      active.value = true
    }
    return {
      dropdownRef,
      currentUser,
      active,
      onClickOpen,
    }
  },
})
</script>
<style lang="scss" scoped>
.user-dropdown {
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
    right: 0;
    display: none;
    position: absolute;
    transform: translateY(-20px);
    transition: all 150ms ease-in-out, transform 150ms ease-in-out;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: 0.75rem;
    background: var(--theme-bg-color);
    z-index: 2222;
    min-width: 150px;
  }
}
</style>
