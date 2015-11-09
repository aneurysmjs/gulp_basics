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

   return gulp.src("./public/components/**/*.html")
      .pipe(ngHtml2Js({
         moduleName: function (file) {
                pathParts = file.path.split('/');
                folder = pathParts[pathParts.length - 2];

            return folder.replace(/-[a-z]/g, function (match) {
               return match.substr(1).toUpperCase();
            });
         },
         prefix: "/components/",
         template: "angular.module('<%= moduleName %>').run(['$templateCache', function($templateCache) {\n" +
                     "console.log('<%= moduleName %> run');\n"+
                   "  $templateCache.put('<%= template.url %>',\n    '<%= template.escapedContent %>');\n" +
                   "  }]);\n"

      }))
      .pipe(gulp.dest("./public/components"));

});


