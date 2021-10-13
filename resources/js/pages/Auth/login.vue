<template>
  <div class="login">
    <div class="container">
      <div class="login-container">
        <div class="login-container-left">
          <img src="/images/assets/svg/phone.svg" />
        </div>
        <div class="login-container-right">
          <img src="/images/assets/svg/laravel_and_vue.svg" />
          <form ref="form" class="login-form" @submit="onLogin">
            <div class="login-form-input">
              <i class="icon ic-user" />
              <input v-model="formState.username" />
            </div>
            <div class="login-form-input">
              <i class="icon ic-artist" />
              <input type="password" v-model="formState.password" />
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref, defineComponent, reactive, toRaw } from 'vue'
import { Textarea, Card } from '/@/components/Common'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Login',
  components: {
    Textarea,
    Card,
  },
  setup() {
    const store = useStore()
    const text = ref('')
    const formState = reactive({
      username: '',
      password: '',
    })
    const onLogin = (e: Event) => {
      e.preventDefault()
      store.dispatch('user/doLogin', toRaw(formState))
    }
    return {
      text,
      formState,
      onLogin,
    }
  },
})
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    padding: 10px;
  }
  &-container {
    width: 100%;
    overflow: hidden;
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    &-left {
      width: 50%;
      @include media('<medium') {
        display: none;
      }
    }
    &-right {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @include media('<medium') {
        width: 100%;
      }
      img {
        width: 300px;
      }
    }
  }
}

.login-form {
  max-width: 400px;
  padding-top: 30px;
  &-input {
    position: relative;
    min-width: 250px;
    .icon {
      position: absolute;
      top: 50%;
      font-size: 20px;
      transform: translateY(-50%);
      left: 15px;
    }
    input {
      height: 50px;
      width: 100%;
      padding-left: 50px;
      &:focus-visible {
        outline: none;
      }
    }
  }
}
</style>
