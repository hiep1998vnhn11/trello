<template>
  <aside class="sidebar left" :class="{ 'is-expanded': isExpanded }">
    <div class="top">
      <div class="trello-board-name" @click="expandSidebar">
        <span>E</span>
      </div>
      <div v-show="isExpanded">Edapt Development</div>
      <div>
        <button v-show="isExpanded" class="btn" @click="expandSidebar">
          <i class="icon ic-go-left"></i>
        </button>
      </div>
    </div>
    <div class="devide"></div>
    <nav class="nav nav-1">Các bảng của bạn</nav>
    <div class="bottom">
      <div class="create-playlist">
        <span>Phản hồi thanh bên</span>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'TrelloSidebarLeft',
  emits: ['toggle'],
  props: {
    expand: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const isExpanded = computed(() => props.expand)
    function expandSidebar() {
      emit('toggle')
    }
    return {
      expandSidebar,
      isExpanded,
    }
  },
})
</script>
<style lang="scss" scoped>
.sidebar:not(.is-expanded) {
  width: 40px;
  :deep(.nav) {
    li {
      border-left: unset !important;
      &.is-active {
        background-color: var(--alpha-bg);
      }
    }
    a {
      padding: 15px 23px;
      span {
        display: none;
      }
    }
  }
}
.sidebar.is-expanded {
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%);
  z-index: 12;
}
.sidebar {
  display: inline-block;
  width: $sidebar-width;
  transition: width 0.3s;
  height: calc(100vh - 50px);
  background: var(--sidebar-bg);
  position: fixed;
  z-index: 900;
  top: 50px;
  left: 0;
  overflow: hidden;
  .top {
    height: $top-height;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4px;
    .trello-board-name {
      width: 32px !important;
      height: 32px;
      font-size: 20px;
      font-weight: bold;
      color: white;
      background: red;
      border-radius: 5px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  .devide {
    position: relative;
    height: 1px;
    &::after {
      content: '';
      border-top: 1px solid var(--border-color);
      position: absolute;
      left: 25px;
      right: 25px;
      top: 0;
    }
  }
  .nav-1 {
    margin-bottom: 15px;
  }
}
.middle {
  margin-top: 14px;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  .create-playlist {
    border-top: 1px solid var(--border-color);
    height: 54px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @include media('<medium') {
      display: none;
    }
    a {
      display: flex;
      padding: 0 25px;
      color: var(--text-primary);
      font-weight: 700;
      align-items: center;
      text-decoration: none;
      &:hover {
        color: var(--primary);
      }
      i {
        font-size: 18px;
        height: 18px;
        margin-right: 10px;
      }
      span {
        flex: 1 1;
      }
    }
  }
  .expand {
    @include media('>medium') {
      display: none;
    }
    float: right;
    padding: 10px;
    .btn {
      background: var(--alpha-bg);
      border-radius: 999px;
      padding: 15px 18px;
    }
  }
}
</style>
