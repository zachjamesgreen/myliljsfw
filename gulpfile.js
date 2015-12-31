var gulp = require('gulp'),
    jade = require('jade'),
    gJade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('default', function() {
  console.log("works");
});

gulp.task('jade',function() {
  gulp.src('./app/views/**/*.jade')
    .pipe(gJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass',function() {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
});
