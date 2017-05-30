var gulp    = require('gulp'),
  uglify    = require('gulp-uglify'),
  rename    = require('gulp-rename'),
  sass      = require('gulp-sass');

// Minificar archivos SCSS y guardarlos en otra carpeta y renombarlos
gulp.task('minSass', function() {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css'));
});

// Minificar archivos javascript, guardarlos en otra carpeta y renombrarlos
gulp.task('minJS', function () {
  gulp.src('./source/js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./www/js/'));
});


// Tarea por default
gulp.task('default', ['minSass', 'minJS']);

// Observador
gulp.task('watch', function () {
  gulp.watch('source/js/*.js', ['minJS']);
  gulp.watch('source/scss/**/*.scss', ['minSass']);
});