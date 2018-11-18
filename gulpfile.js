var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//
//gulp.task('[Function Name]', function(){
   // Do stuff here
//}

gulp.task('sass', function(){
   return gulp.src('app/style.scss')
      .pipe(sass())
      .pipe(cssnano())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function(){
    return gulp.src(['app/js/plugins/*.js', 'app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
gulp.watch('app/*.scss', ['sass']);
gulp.watch('app/js/**/*.js', ['js']);
});

// The below fails for gulp@4.0
// gulp.task('default', ['sass', 'js', 'watch']);

// To fix it:

// gulp.task('a', ['b', 'c'], function () { // do something })

// Becomes:

// var a = function () { // do some stuff }
// gulp.task('a', gulp.series(gulp.parallel(b, c), a))

gulp.task('default', gulp.series(gulp.parallel('sass', 'js', 'watch')))


//Create a separate Gulp tasks to:
// minify your CSS and JS files called “minifyCSS” and “minifyJS.”
// Then you wouldn’t add those tasks to your default Gulp task,
// but you could create a new Gulp task called “prod”
// that has everything the default task has, and also has your minify tasks.

//gulp.task('prod', ['sass', 'js', 'watch']);
