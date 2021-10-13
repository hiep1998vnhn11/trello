import { setupRouter, router } from './router'
import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from './store'
import { setupPlugin } from './plugins'
import createI18n from './locales'
import './assets/scss/app.scss'
import './index.css'

async function bootstrap() {
  const app = createApp(App)
  app.config.compilerOptions.isCustomElement = (tag: string) =>
    tag === 'ion-icon'

  setupRouter(app)
  setupStore(app)
  setupPlugin(app)

  app.use(createI18n)
  await router.isReady()
  app.mount('#app', true)
}

void bootstrap()
