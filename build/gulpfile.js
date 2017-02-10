/**
 * Gulp config
 * gulp --gulpfile src/build/gulpfile.js"
 */

const global = require('./global'),
    gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    exec = require('child_process').exec;

gulp.task('default', function (cb){
    exec('npm run build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function () {
    gulp.watch([
        path.join(global.srcPath, '*.js'),
        path.join(global.srcPath, '*.scss'),
        path.join(global.srcPath, '*.html')
    ], ['default']);
});

/**
 * 清理dist目录
 */
gulp.task('clean', function () {
    return del([
        //path.join(global.distPath, '*.js'),
        path.join(global.distPath, '*.map'),
        //path.join(global.distPath, '*.css'),
        //path.join(global.distPath, '*.html')
    ], {force: true});
});
