<template>
  <div class="auth">
    <AuthHeader />
    <div class="auth-container">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import AuthHeader from './auth/AuthHeader.vue'
export default defineComponent({
  name: 'AuthContainer',
  components: {
    AuthHeader,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped>
.auth {
  &-container {
    padding: $auth-navbar-height 0 0 0;
  }
}
</style>
