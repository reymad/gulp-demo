/*
* Dependencias
*/
/*
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');
*/
/*
* Configuración de la tarea 'demo'
*/

/*
gulp.task('demo', function () {
  gulp.src('js/source/*.js')
  .pipe(concat('todo.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
});
*/

/*
 * watchers
 */
/*
var gulp = require('gulp'),
    path = {},
    jadeTasks = ['html:frontend'],
    coffeeTasks = ['js'],
    stylusTasks = ['styles'];
*/

//path.watch = {
//    jade: ['jade/**/*.jade'],
//    stylus: ['stylus/**/*.styl'],
//    coffee: ['coffee/**/*.coffee']
//};
/*
gulp.task('watch', function () {

    gulp.watch(path.watch.jade, jadeTasks);
    gulp.watch(path.watch.coffee, coffeeTasks);
    gulp.watch(path.watch.stylus, stylusTasks);
});
*/


//* watcher for sass
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
