(function() {
	'use strict';

	var gulp = require('gulp');
	var config = require('./gulp.config.js');
	var $ = require('gulp-load-plugins')();

	function getTask(task) {
		return require('./tasks/' + task)(gulp, $, config);
	}

	gulp.task('styl', getTask('styl'));

	gulp.task('default', ['styl']);

})();