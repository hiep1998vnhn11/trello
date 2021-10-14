import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'

import { configHtmlPlugin } from './html'
import { configPwaConfig } from './pwa'
import { configVisualizerConfig } from './visualizer'
import { configImageminPlugin } from './imagemin'
import { configHmrPlugin } from './hmr'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_USE_IMAGEMIN, VITE_LEGACY } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag === 'ion-icon',
        },
      },
    }),
    vueJsx(),
  ]

  // TODO
  !isBuild && vitePlugins.push(configHmrPlugin())

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  //vite-plugin-theme
  // The following plugins only work in the production environment
  if (isBuild) {
    //vite-plugin-imagemin
    VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv))
  }

  return vitePlugins
}
