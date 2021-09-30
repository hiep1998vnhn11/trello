import type { Plugin } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'

import { configHtmlPlugin } from './html'
import { configPwaConfig } from './pwa'
import { configCompressPlugin } from './compress'
import { configStyleImportPlugin } from './styleImport'
import { configVisualizerConfig } from './visualizer'
import { configImageminPlugin } from './imagemin'
import { configHmrPlugin } from './hmr'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    const {
        VITE_USE_IMAGEMIN,
        VITE_LEGACY,
        VITE_BUILD_COMPRESS,
        VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
    } = viteEnv

    const vitePlugins: (Plugin | Plugin[])[] = [
        // have to
        vue(),
        // have to
        vueJsx(),
    ]

    // TODO
    !isBuild && vitePlugins.push(configHmrPlugin())

    // @vitejs/plugin-legacy
    VITE_LEGACY && isBuild && vitePlugins.push(legacy())

    // vite-plugin-html
    vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

    // vite-plugin-style-import
    vitePlugins.push(configStyleImportPlugin(isBuild))

    // rollup-plugin-visualizer
    vitePlugins.push(configVisualizerConfig())

    //vite-plugin-theme
    // The following plugins only work in the production environment
    if (isBuild) {
        //vite-plugin-imagemin
        VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin())

        // rollup-plugin-gzip
        vitePlugins.push(
            configCompressPlugin(
                VITE_BUILD_COMPRESS,
                VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
            )
        )

        // vite-plugin-pwa
        vitePlugins.push(configPwaConfig(viteEnv))
    }

    return vitePlugins
}
