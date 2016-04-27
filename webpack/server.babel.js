import { resolve } from 'path';

const _root = resolve(__dirname, '..');
const build = resolve(_root, 'bin');
console.log('building server');
const serverWebpack = {
  entry: './src/server/index.js',
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

export default serverWebpack;
