/**
 * rollup.js config
 * rollup -c src\plugins\web-share\rollup.config.js
 * SET NODE_ENV=production && rollup -c rollup.config.js
 */

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';
import buble from 'rollup-plugin-buble';
import url from "rollup-plugin-url"

const path = require('path');
const rootPath = path.join(__dirname),
  srcPath = path.join(rootPath, 'src'),
  distPath = path.join(rootPath, 'dist');

export default {
  entry: path.join(srcPath, 'index.js'),
  format: 'umd',
  moduleName: 'socshare',
  plugins: [
    url(),
    sass({
      options: {
        outputStyle: 'compressed'
      },
      insert: true,
      //output: path.join(distPath, 'socshare.css')
    }),
    babel(),
    buble(),
    uglify()
  ],
  dest: path.join(distPath, 'socshare.min.js')
};
