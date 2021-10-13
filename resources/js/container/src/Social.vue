<template>
  <div class="social-container">
    <sidebar-left />
    <div class="main">
      <div class="search-bar">
        <input type="text" placeholder="Search" />
        <button class="right-side-button">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="main-container">
        <router-view />
      </div>
    </div>
    <sidebar-right />
    <div class="overlay active"></div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import SidebarLeft from './social/SidebarLeft.vue'
import SidebarRight from './social/SidebarRight.vue'
export default defineComponent({
  name: 'SocialContainer',
  components: {
    SidebarLeft,
    SidebarRight,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.social-container {
  background-color: $bg-color;
  display: flex;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
}

.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #181d2f;
}

.search-bar {
  height: 60px;
  background-color: $bg-color;
  z-index: 3;
  position: relative;
  input {
    height: 100%;
    width: 100%;
    display: block;
    background-color: transparent;
    border: none;
    padding: 0 54px;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3e%3cpath d='M508.9 478.7L360 330a201.6 201.6 0 0045.2-127.3C405.3 90.9 314.4 0 202.7 0S0 91 0 202.7s91 202.6 202.7 202.6c48.2 0 92.4-17 127.3-45.2L478.7 509c4.2 4.1 11 4.1 15 0l15.2-15.1c4.1-4.2 4.1-11 0-15zm-306.2-116c-88.3 0-160-71.8-160-160s71.7-160 160-160 160 71.7 160 160-71.8 160-160 160z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%235C5D71'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: 25px 50%;
    color: #fff;
    font-family: $body-font;
    font-weight: 600;
    &::placeholder {
      color: #5c5d71;
    }
  }
}

.main-container {
  padding: 20px;
  flex-grow: 1;
  overflow: auto;
  background-color: #24273b;
}

.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(#24273b, 0.8);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.3s;

  @media screen and (max-width: 1210px) {
    &.active {
      z-index: 3;
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }
}

.side-wrapper {
  padding: 30px;
}
.right-side-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border: 0;
  width: 52px;
  background-color: #1e2031;
  border-left: 1px solid $border-color;
  color: #fff;
  display: none;
  cursor: pointer;

  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background-color: #1b86f8;
    border: 2px solid #1e2031;
    top: 13px;
    right: 12px;
  }
  svg {
    width: 22px;
  }
  @media screen and (max-width: 1210px) {
    display: block;
  }
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.01);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.11);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
