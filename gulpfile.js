var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('test', function () {
  return gulp.src('package.json').pipe(shell('npm run test'));
})

gulp.task('browserify', function () {
  return gulp.src('package.json').pipe(shell('npm run browserify'));
})

gulp.task('default', ['test', 'browserify'], function() {
  // place code for your default task here
});