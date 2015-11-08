var gulp = require('gulp'),
    runSequence = require('run-sequence');

/*
Gulp tasks takes 3 parameters:
1) The name of the task.
2) An array of sub-tasks or dependencies that will be executed and completed before your main task is completed,
   as well as the function that defines the unit of work that's supposed to be done for that task.
3) The actual function that the task is.

Occasionally, your sub-tasks will still be running while your main task is trying to execute.
Because Gulp is asynchronous, this is a sometimes common scenario. One of the ways to solve this is using the 'run-sequence' plugin.
 */
gulp.task('default', function (callback) {
   /*
    you will notice that the default task was started, but it was never finished. Because Gulp is a sequence,
    we have to give it some hints of when your task is completed. One of the ways to do this is to return a callback in the case of RunSequence.
    */
   runSequence('jero', callback);
});

gulp.task('jero', function (callback) {
   runSequence('clean', 'mainTask', callback)
});

gulp.task('clean', function () {

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