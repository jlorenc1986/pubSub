var gulp = require('gulp');

var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var coffee = require('gulp-coffee');
var watch  = require ('gulp-watch');

var bases = {

	scripts:['./src/coffee/*.coffee','./spec/coffee/*-spec.coffee']
} 


gulp.task('coffee',function() {
	// body...

	gulp.src(bases.scripts[0])
		.pipe(coffee({bare:true}))
		.pipe(gulp.dest('./src/js/'));


	gulp.src('./spec/coffee/*-spec.coffee')
		.pipe(coffee({bare:true}))
		.pipe(gulp.dest('./spec/js/'));


});

gulp.task('default',function() {
	// body...

	gulp.watch(bases.scripts[0],['coffee']);
	gulp.watch(bases.scripts[1],['coffee']);


});