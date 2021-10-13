<template>
  <div class="search-input">
    <click-out-side @clickOutside="onClickOutSide">
      <div class="search-input-item">
        <div class="search-input-item__select" @click="onClickOpen">
          <i class="icon ic-search search"></i>
          <input v-model="input" placeholder="Tìm kiếm ..." />
          <i v-show="active" class="icon ic-share share"></i>
          <i
            v-show="active"
            class="icon ic-close close"
            @click="onClickClose"
          ></i>
        </div>
        <div
          class="search-input-item__content bottom"
          :class="{
            active,
          }"
        >
          <div class="search-input-item__content__title">
            Gửi phản hồi cho chúng tôi asd
          </div>
          <div class="search-input-item__content__footer">
            Gửi phản hồi cho chúng tôi
          </div>
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
    const input = ref('')
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
      input,
    }
  },
})
</script>
<style lang="scss" scoped>
.search-input {
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  &-item {
    position: relative;
    display: block;
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
        background: rgba(255, 255, 255, 0.1);
        &:focus-visible {
          outline: none;
          background: #fff;
        }
      }
    }

    &__content {
      &.active {
        opacity: 1;
        display: block;
        transform: translateY(-10px);
      }
      top: calc(100% + 1rem);
      left: -100px;
      opacity: 0;
      width: 500px;
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
      &__title {
        display: flex;
        justify-content: center;
      }
      &__footer {
        border-top: solid 1px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
