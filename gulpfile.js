const gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  connect = require('gulp-connect');


gulp.task('compile-sass', () => {
  return gulp
    .src('./source/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload())
    
})

gulp.task('minify-html', () => {
  return gulp
    .src(['source/index.html'])
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

gulp.task('connect', function() {
  connect.server({
    name: 'Dist App',
    root: 'dist',
    port: 8001,
    livereload: true
  });
});

gulp.task('watch', () => {
  gulp.watch('source/**/*.scss', ['compile-sass'])
  gulp.watch('source/index.html', ['minify-html'])
});

gulp.task('default', ['compile-sass', 'minify-html', 'connect', 'watch'])
