import { App } from 'vue'
import AppIcon from './App/AppIcon.vue'
export function installGlobalComponent(app: App) {
  app.component('app-icon', AppIcon)
}
