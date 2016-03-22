// Include Gulp
var gulp = require('gulp');

// Include Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./public/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./public/dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});

// Minify CSS
gulp.task('css', function() {
	gulp.src('./public/styles/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./public/dist/styles'));
});

// Image Optimalisation 
gulp.task('imgopt', function() {
	gulp.src('./public/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./public/dist/img'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./public/js/*.js', ['scripts']);
    gulp.watch('./public/styles/*.css', ['css']);
    gulp.watch('./public/images/*', ['imgopt']);
});

// Default Task
gulp.task('default', ['scripts', 'css', 'imgopt', 'watch']);


