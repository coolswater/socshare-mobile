/**
 * Global variable
 */

const path = require('path');
const rootPath = path.join(__dirname, '..'),
  srcPath = path.join(rootPath, 'src');

module.exports = {
  rootPath: rootPath,
  srcPath: srcPath,
  nodeModulesPath: path.join(rootPath, 'node_modules'),
  bowerPath: path.join(srcPath, 'lib'),
  publicPath: '',
  distPath: path.join(rootPath, 'dist')
};
