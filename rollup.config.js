import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: './dist/bundle/js/index.js',
      sourcemap: false,
    },
    {
      format: 'esm',
      file: './dist/bundle/esm/index.js',
      sourcemap: false,
    },
  ],
  watch: {
    skipWrite: false,
    clearScreen: false,
    include: 'src/**/*',
  },
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
    url(),
    svgr({
      options: {
        jsx: 'react',
      },
    }),
    copy({
      targets: [
        {
          src: ['src/lib/assets'],
          dest: './dist',
        },
        {
          src: ['src/lib/style'],
          dest: './dist',
        },
        {
          src: ['README.md'],
          dest: './dist',
        },
        {
          src: ['src/package.json'],
          dest: './dist',
        },
      ],
    }),
  ],
};
