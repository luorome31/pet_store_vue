import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 配置代理
  // server: {
  //   proxy: {
  //     "/api": {
  //       //服务器请求域名
  //       target: "http://localhost:3001",后台服务器
  //       changeOrigin: true,修改源
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // }

})
