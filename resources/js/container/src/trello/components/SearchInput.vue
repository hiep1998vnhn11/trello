<template>
  <div class="dropdown">
    <click-out-side @clickOutside="onClickOutSide">
      <div class="dropdown-item">
        <div class="dropdown-item__select" @click="onClickOpen">
          <i class="icon ic-search search"></i>
          <input />
          <i v-show="active" class="icon ic-share share"></i>
          <i
            v-show="active"
            class="icon ic-close close"
            @click="onClickClose"
          ></i>
        </div>
        <div
          class="dropdown-item__content bottom"
          :class="{
            active,
          }"
        >
          123
        </div>
      </div>
    </click-out-side>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import ClickOutSide from '/@/components/ClickOutSide.vue'
export default defineComponent({
  name: 'SearchInput',
  components: {
    ClickOutSide,
  },
  setup(props) {
    const active = ref<boolean>(false)
    const onClickOutSide = () => {
      active.value = false
    }
    const onClickOpen = () => {
      active.value = true
    }
    const onClickClose = (e: any) => {
      e.preventDefault()

      active.value = false
    }
    return {
      onClickOutSide,
      onClickOpen,
      active,
      onClickClose,
    }
  },
})
</script>
<style lang="scss" scoped>
.dropdown {
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  .dropdown-item {
    position: relative;
    display: block;
    &:hover {
      cursor: pointer;
    }
    &__select {
      cursor: pointer;
      width: 300px;
      height: 35px;
      position: relative;
      .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .search {
        left: 10px;
      }
      .share {
        right: 30px;
      }
      .close {
        right: 10px;
      }
      input {
        width: 100%;
        height: 100%;
        padding-left: 30px;
        padding-right: 50px;
        &:focus-visible {
          outline: none;
        }
      }
    }

    &__content {
      &.bottom {
        top: calc(100% + 1rem);
        left: 0;
      }
      &.left {
        right: calc(100% + 1rem);
        top: 0;
      }
      &.top {
        bottom: calc(100% + 1rem);
        left: 0;
      }
      &.right {
        left: calc(100% + 0.5rem);
        top: 1rem;
      }
      &.active {
        opacity: 1;
        display: block;
        transform: translateY(-10px);
      }
      opacity: 0;
      position: absolute;
      display: none;
      transform: translateY(-20px);
      transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
      padding: 0.75rem;
      background: white;
      z-index: 2222;
      min-width: 150px;
    }
  }
}
</style>
