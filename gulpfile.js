var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject'),
    gulpConfig = require('./gulp/gulp.config.js'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    ngHtml2Js = require("gulp-ng-html2js");

gulp.task('default', function (callback) {
   runSequence('build', callback);
});

gulp.task('build', function (callback) {
   runSequence('watch', callback)
});

gulp.task('watch', function () {
   var server = livereload();
   gulp.watch(gulpConfig.app_files.js, ['lint', 'templating', 'concatAll']);
});

gulp.task('lint', function () {

   return gulp.src(gulpConfig.app_files.js)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

});

gulp.task('concatAll', function () {

   return gulp.src(gulpConfig.concatOrder)
      .pipe(sourcemaps.init())
      .pipe(concat('appFinal.js', {newLine: '\n\n'}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/dist'));

});

gulp.task('templating', function () {
   var pathParts, folder;
   console.log('--- templating--- ');

   return gulp.src("./public/components/**/templates/*.html")
      .pipe(ngHtml2Js({
         moduleName: function (file) {
                pathParts = file.path.split('/');
                folder = pathParts[pathParts.length - 3];
               return folder.replace(/-[a-z]/g, function (match) {
                  return match.substr(1).toUpperCase();
               });
         },
         prefix: "components/",
         template:"(function () {" +
                  "\t'use strict';\n" +
                  "\tangular.module('<%= moduleName %>').run(run);\n" +
                  "\trun.$inject = ['$templateCache'];\n" +
                  "\tfunction run($templateCache) {\n" +
                  "\t\tconsole.log('<%= moduleName %> run');\n" +
                  "\t\t$templateCache.put('<%= template.url %>', '<%= template.escapedContent %>');\n" +
                  "\t}\n" +
                  "}());"
      }))
      .pipe(gulp.dest("./public/components"));

});


