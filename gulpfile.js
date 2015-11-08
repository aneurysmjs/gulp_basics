var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject');

gulp.task('default', function (callback) {
   runSequence('build', callback);
});

gulp.task('build', function (callback) {
   runSequence('clean', 'index', 'mainTask', callback)
});

gulp.task('clean', function () {

});

gulp.task('index', function (callback) {
   var target = gulp.src('public/index.html'),
       tpl_src = gulp.src('public/components/**/*js');
   return target.pipe(inject(tpl_src)).pipe(gulp.dest('public/dist'));
});

gulp.task('mainTask', ['task1', 'task2', 'task3'], function () {
   console.log('mainTask modafucka');
});

gulp.task('task1', function () {

});

gulp.task('task2', function () {

});

gulp.task('task3', function () {

});