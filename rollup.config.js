// type
import { DEFAULT_EXTENSIONS } from '@babel/core';

// plugin
import babel from 'rollup-plugin-babel';
import rollupTypescript from "rollup-plugin-typescript2";
import sourceMaps from "rollup-plugin-sourcemaps";
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import path from 'path';

// eslint-disable-next-line no-undef
const resolve = dir => path.join(__dirname, dir);

const ROOT_PATH = 'docs';

export default {
  input: './src/main.ts',
  plugins: [
    eslint(),
    // alias({
    //   entries: [
    //     { find: '@', replacement: resolve(`${ROOT_PATH}/src`) },
    //     { find: '@utils', replacement: resolve(`src`) }],
    // }),
    sourceMaps(),
    // 让你的项目支持使用 TS 来进行开发，插件执行时会欧仁读取 tsconfig.json 配置
    rollupTypescript(),
    // rollup本身是不支持CommonJS的，使用了这个插件，就可以解析CommonJS模块了。
    // 另外如果在一个配置内同时使用了@rollup/plugin-babel，需要把@rollup/plugin - commonjs 插件放在前面使用。
    commonjs(),
    // 让我们提前使用js的新特性，把最新的语法转为es5.
    babel({
      runtimeHelpers: true,
      // 只转换源代码，不运行外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
    // 用于在生产环境中，对代码进行压缩
    terser(),
  ],
  output: [
    {
      format: 'cjs',
      file: 'lib/bundle.cjs.js',
    },
    {
      format: 'es',
      file: 'lib/bundle.esm.js',
    },
  ],
};