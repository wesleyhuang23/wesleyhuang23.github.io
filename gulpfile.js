'use-strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var maps = require('gulp-sourcemaps');
const gzip = require('gulp-gzip');

const jsSrc = './scripts/*';
const cssSrc = './public/css/*';
const htmlSrc = './public/*.html';
const imgSrc = './img/*';
const pageSrc = './public/**/*.html';
const fontSrc = "./resume/*";

gulp.task('compressJS', function(){
    return gulp.src(jsSrc)
    .pipe(gzip())
    .pipe(gulp.dest('./scripts'));
})
gulp.task('compressIMG', function() {
    return gulp.src(imgSrc)
      .pipe(gzip())
      .pipe(gulp.dest('./img'));
  });
  gulp.task('compressRESUME', function() {
    return gulp.src(fontSrc)
      .pipe(gzip())
      .pipe(gulp.dest('./resume'));
  });
gulp.task('concatCSS', function(){
    gulp.src(['./css/*.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./styles'))
})
gulp.task('concatJS', function(){
    gulp.src(['./js/**/**/*.js'])
    .pipe(maps.init())
    .pipe(concat('main.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./scripts'))
})

gulp.task('minify', function(){
    gulp.src('./styles/main.css')
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./styles'))
});

gulp.task('uglify', function() {
  return gulp.src('./scripts/main.js')
      .pipe(rename('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./scripts'));
});

gulp.task('default', ['concatCSS', 'concatJS'], function(){
    console.log('gulp running...')
});

gulp.task('mini', ['minify'], function(){
    console.log('minifying')
});

gulp.task('compress', ['compressJS', 'compressIMG','compressRESUME'], function(){
    console.log('compressing')
});

gulp.task('watch', function(){
    gulp.watch('./js/**/*.js', ['concatJS', 'minify']);
    gulp.watch('./css/*.css', ['concatCSS', 'minify'])
});