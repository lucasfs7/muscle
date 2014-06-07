var gulp = require('gulp');
var util = require('gulp-util');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var liveScript = require('gulp-livescript');
var karma = require('gulp-karma');

gulp.task('build', function() {
  gulp.src('./src/**/*.ls')
    .pipe(liveScript({bare: true})
    .on('error', util.log))
    .pipe(gulp.dest('./lib'));
});

gulp.task('test', ['build'], function() {
  return gulp.src('./test/*.js', { read: false })
    .pipe(browserify())
    .pipe(rename('test.js'))
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('default', function() {
  console.log('run "npm run-script compile" to build the lib');
  console.log('run "npm test" to test the lib");
});
