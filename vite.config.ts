import path from 'path';
import { defineConfig } from 'vite';

// plugin
import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
// 这个插件允许组件使用 setup 模式时，通过 <script setup name="xx"> 对组件进行命名
// 但是直接引用变量 <script setup :name="Name"> 这样不行
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

const resolve = dir => path.join(__dirname, dir);

const ROOT_PATH = 'docs';

const aliasFn = () => ({
  '@': resolve(`${ROOT_PATH}/src`),
  '@utils': resolve('src'),
});

// https://vitejs.dev/config/
export default defineConfig({
  // 项目根目录
  root: ROOT_PATH,
  resolve: {
    alias: aliasFn(),
  },
  publicDir: resolve(`${ROOT_PATH}/public`),
  plugins: [vue(), eslintPlugin({ cache: false }), vueSetupExtend()],
  build: {
    outDir: resolve('dist'),
    assetsDir: 'public',
    rollupOptions: {
      input: {
        entry: resolve(`${ROOT_PATH}/index.html`),
      },
    },
  },
});
