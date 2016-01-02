var gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  console.log("works");
});

gulp.task('babel',function() {
  return gulp.src(['app/*.js','app/js/**/*.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('public/js'));
});

gulp.task('browserify', function() {
  return gulp.src('public/js/app.js')
    .pipe(browserify().bundle(function(a,body) {
      return body
    }))
    .pipe(gulp.dest('public/js'))

});

gulp.task('sass',function() {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
});
