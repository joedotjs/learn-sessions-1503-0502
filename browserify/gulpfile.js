var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('compileJS', function () {

    var b = browserify();
    b.add('./src/main.js');

    b.transform(babelify);
    b.transform(reactify);

    b.bundle().pipe(source('bundle.js')).pipe(gulp.dest('./')).pipe(process.stdout);

});

gulp.task('default', function () {
   gulp.watch('src/**/*.js', ['compileJS']);
});