<template>
  <div class="app-container">
    <!-- <div class="video-bg">
      <video width="320" height="240" autoplay loop muted>
        <source src="/videos/bigsur.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> -->

    <div class="app">
      <app-header />
      <div class="wrapper">
        <app-sidebar />

        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import AppSidebar from './app/Sidebar.vue'
import AppHeader from './app/Header.vue'
export default defineComponent({
  name: 'AppContainer',
  components: {
    AppSidebar,
    AppHeader,
  },
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped></style>
