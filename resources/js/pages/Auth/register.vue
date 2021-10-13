<template>
  <div class="login">
    <div class="container">
      register
      <div class="login-container">
        <form ref="form" class="login__form">
          <div class="login__form__input">
            <input />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Register',
  setup() {
    onMounted(() => {})
    return {}
  },
})
</script>
<style lang="scss" scoped></style>
