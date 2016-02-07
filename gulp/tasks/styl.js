module.exports = function(gulp, $, config) {
	var options  = {
		compress: true
	}

	return function() {
		return gulp.src(config.dev.styl)
				.pipe($.plumber())
				.pipe($.stylus(options))
				.pipe(gulp.dest(config.dist .css));
  	}
}