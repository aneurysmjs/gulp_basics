var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject'),
    gulpConfig = require('./gulp/gulp.config.js'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

gulp.task('default', function (callback) {
   runSequence('build', callback);
});

gulp.task('build', function (callback) {
   runSequence('watch', callback)
});

gulp.task('lint', function () {

   return gulp.src(gulpConfig.app_files.js)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

});

gulp.task('watch', function () {
   var server = livereload();
   gulp.watch(gulpConfig.app_files.js, ['lint', 'concatAll']);
});

gulp.task('concatAll', function () {

   return gulp.src(gulpConfig.concatOrder)
      .pipe(concat('appFinal.js', {newLine: '\n\n'}))
      .pipe(gulp.dest('./public/dist'))
      .pipe(livereload());

});