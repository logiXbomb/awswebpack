import { resolve } from 'path';

const _root = resolve(__dirname, '..');
const build = resolve(_root, 'build', 'dist');
console.log('building client');
const clientWebpack = {
  entry: './src/client/main.js',
  output: {
    path: build,
    filename: 'main.js',
  },
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       loaders: ['babel'],
  //       exclude: [/node_modules/],
  //     },
  //   ],
  // },
};

export default clientWebpack;
