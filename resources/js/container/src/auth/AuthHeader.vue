<template>
  <nav class="auth-header">
    <ul>
      <li>
        <toggle-dark-mode />
      </li>
    </ul>
    <ul>
      <router-link v-slot="{ href, navigate, isActive }" custom to="/login">
        <li @click="navigate" :class="{ active: isActive }">
          <a :href="href"> {{ $t('login') }} </a>
        </li>
      </router-link>
      <router-link v-slot="{ href, navigate, isActive }" custom to="/register">
        <li @click="navigate" :class="{ active: isActive }">
          <a :href="href"> {{ $t('register') }} </a>
        </li>
      </router-link>
    </ul>
  </nav>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import { ToggleDarkMode } from '/@/components/Advance'
export default defineComponent({
  name: 'AuthHeader',
  components: {
    ToggleDarkMode,
  },
  setup() {
    onMounted(() => {})
  },
})
</script>
<style lang="scss" scoped>
.auth-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $auth-navbar-height;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  // background: #fff;
  ul {
    display: flex;
    align-items: center;
    height: 100%;
    li {
      height: 100%;
      margin-left: 1rem;
      margin-right: 1rem;
      display: flex;
      align-items: center;
      &.active {
        border-bottom: solid 3px $primary-color;
      }
      a {
        padding: 10px 15px;
        line-height: $auth-navbar-height;
      }
    }
  }
}
</style>
