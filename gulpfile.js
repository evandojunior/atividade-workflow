const gulp = require('gulp')
const sass = require('gulp-sass')
const watch = require('gulp-watch')

gulp.task('compile-css', () => {
  return gulp
          .src('./source/scss/*.scss')
          .pipe(sass())
          .pipe(gulp.dest('./dist/css'))
})

gulp.task('move-html', () => {
  return gulp
        .src(['source/index.html'])
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', () => {
  gulp.watch('source/**/*.scss', ['compile-css'])
  gulp.watch('source/index.html', ['move-html'])
});

gulp.task('init', ['compile-css', 'watch'])
