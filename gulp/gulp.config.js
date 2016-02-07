'use strict';

var paths = {
	dev  : '../dev/',
	dist : '../dist/'
};

var config = {
	dev : {
		styl : paths.dev + 'styl/**/*.styl'
	},
	dist : {
		css : paths.dist + 'css/'
	}
};

module.exports = config;