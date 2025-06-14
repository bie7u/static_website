// --------------------------------------------------
// [Gulpfile]
// --------------------------------------------------

'use strict';
 
var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	changed 	= require('gulp-changed'),
	cleanCSS 	= require('gulp-clean-css'),
	rtlcss 		= require('gulp-rtlcss'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	pump 		= require('pump'),
	htmlhint  	= require('gulp-htmlhint');


// Gulp plumber error handler
function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}


// --------------------------------------------------
// [Libraries]
// --------------------------------------------------

// Sass - Compile Sass files into CSS
gulp.task('sass', function () {
	gulp.src('../html/sass/**/*.scss')
		.pipe(changed('../html/css/'))
		.pipe(sass({ outputStyle: 'expanded' }))
		.on('error', sass.logError)
		.pipe(gulp.dest('../html/css/'));
});


// Minify CSS
gulp.task('minify-css', function() {
	// Theme
    gulp.src(['../html/css/layout.css', '!../html/css/layout.min.css'])
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../html/css/'));

    // RTL
    gulp.src(['../html/css/layout-rtl.css', '!../html/css/layout-rtl.min.css'])
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../html/css/'));
});


// RTL CSS - Convert LTR CSS to RTL.
gulp.task('rtlcss', function () {
	gulp.src(['../html/css/layout.css', '!../html/css/layout.min.css', '!../html/css/layout-rtl.css', '!../html/css/layout-rtl.min.css'])
	.pipe(changed('../html/css/'))
		.pipe(rtlcss())
		.pipe(rename({ suffix: '-rtl' }))
		.pipe(gulp.dest('../html/css/'));
});


// Minify JS - Minifies JS
gulp.task('uglify', function (cb) {
  	pump([
	        gulp.src(['../html/js/**/*.js', '!../html/js/**/*.min.js']),
	        uglify(),
			rename({ suffix: '.min' }),
	        gulp.dest('../html/js/')
		],
		cb
	);
});


// Htmlhint - Validate html
gulp.task('htmlhint', function() {
	gulp.src('../html/*.html')
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
	  	.pipe(htmlhint.failReporter({ suppress: true }))
});


// --------------------------------------------------
// [Gulp Task - Watch]
// --------------------------------------------------

// Lets us type "gulp" on the command line and run all of our tasks
gulp.task('default', ['sass', 'minify-css', 'rtlcss', 'uglify', 'htmlhint', 'watch']);

// This handles watching and running tasks
gulp.task('watch', function () {
    gulp.watch('../html/sass/**/*.scss', ['sass']);
    gulp.watch('../html/css/layout.css', ['minify-css']);
    gulp.watch('../html/css/layout.css', ['rtlcss']);
    gulp.watch('../html/js/**/*.js', ['uglify']);
    gulp.watch('../html/*.html', ['htmlhint']);
});