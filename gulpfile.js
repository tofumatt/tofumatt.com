'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var serve = require('gulp-serve');
var gulpWatch = require('gulp-watch');

gulp.task('less', function () {
  return gulp.src(__dirname + '/less/styles.less')
    .pipe(gulpWatch(__dirname + '/less/styles.less'))
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(__dirname + '/css'));
});

gulp.task('serve', serve(__dirname));

gulp.task('default', ['less', 'serve']);
