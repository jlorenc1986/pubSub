var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');

var bases = {

	scripts:['app/scripts/']
} 


gulp.task('coffee',function() {
	// body...

	gulp.src('app/scripts/coffee')
		.pipe(coffee({bare:true}))
		.pipe(gulp.dest('app/scripts/js'))
})