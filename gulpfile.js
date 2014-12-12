var gulp 		= require('gulp'),
    clean 		= require('gulp-clean'),
 	jshint 		= require('gulp-jshint'),
 	concat 		= require('gulp-concat'),
 	uglify 		= require('gulp-uglify'),
 	coffee 		= require('gulp-coffee'),
 	watch  		= require ('gulp-watch'),
	jasmine 	= require('gulp-jasmine'),
	browserify 	= require('browserify'),
	source 		= require('vinyl-source-stream');

var bases = {

	scripts:['./src/coffee/*.coffee',
			 './spec/coffee/*-spec.coffee',
			 './src/js/*.js',
			 './spec/js/*-spec.js'
			 ]
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

gulp.task('test',function(){

	gulp.src('./spec/js/*-spec.js').pipe(jasmine());

});

gulp.task('dist',function () {
	// body...
return browserify('./src/js/Editor.js',{standalone:"doit"})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/scripts/'));
})
