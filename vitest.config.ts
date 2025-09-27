import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:59739', // 后端本地地址
        changeOrigin: true,
        rewrite: path => path   // 保持原路径
      }
    }
  }
})

