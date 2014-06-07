var gulp = require('gulp');
var util = require('gulp-util');
var liveScript = require('gulp-livescript');

gulp.task('build', function() {
  gulp.src('./src/**/*.ls')
    .pipe(liveScript({bare: true})
    .on('error', util.log))
    .pipe(gulp.dest('./lib'));
});
