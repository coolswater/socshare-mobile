/**
 * rollup.js config
 * SET NODE_ENV=production && rollup -c rollup.config.js
 */

const babel = require('rollup-plugin-babel'),
    uglify = require('rollup-plugin-uglify'),
    sass = require('rollup-plugin-sass'),
    buble = require('rollup-plugin-buble'),
    url = require('rollup-plugin-url'),
    path = require('path'),
    global = require('./global');

const isDev = (process.env.NODE_ENV || 'development').trim() === 'dev';

module.exports = {
    entry: path.join(global.srcPath, 'index.js'),
    format: 'umd',
    moduleName: 'socshare',
    plugins: [
        url(),
        sass({
            options: {
                outputStyle: 'compressed'
            },
            insert: true
        }),
        babel(),
        buble(),
        uglify({
            output: {
                beautify: isDev
            }
        })
    ],
    dest: path.join(global.distPath, 'socshare-mobile' + (isDev ? '' : '.min') + '.js')
};
