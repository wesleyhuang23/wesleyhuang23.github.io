'use-strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var maps = require('gulp-sourcemaps');

gulp.task('concatCSS', function(){
    gulp.src(['./css/*.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./css'))
})
gulp.task('concatJS', function(){
    gulp.src(['./js/**/**/*.js'])
    .pipe(maps.init())
    .pipe(concat('main.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./js'))
})

gulp.task('minify', function(){
    gulp.src('./css/main.css')
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./css'))
});

gulp.task('default', ['concatCSS', 'concatJS'], function(){
    console.log('gulp running...')
});

gulp.task('mini', ['minify'], function(){
    console.log('minifying')
});

gulp.task('watch', function(){
    gulp.watch('./js/**/*.js', ['concatJS', 'minify']);
    gulp.watch('./css/*.css', ['concatCSS', 'minify'])
});