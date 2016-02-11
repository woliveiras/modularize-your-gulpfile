# Modularize your Gulpfile

Based on: http://macr.ae/article/splitting-gulpfile-multiple-files.html

## How to use

Everything that is related to Gulp is inside the folder 'gulp`

## Clone

```
git clone https://github.com/woliveiras/modularize-your-gulpfile.git your_project
```

### Configurations file

All your paths and configuration to plugins, you put in `gulp.config.js`.

Eg.:

```
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
```

### Gulpfile

In the `gulpfile.js` have a function `getTask` to load all your tasks.

This funciont receive the name of file with parameter.

The tasks need stay on `tasks` folder.

#### Tasks

Put your tasks in the gulpfile as in example:

```
gulp.task('styl', getTask('styl'));

gulp.task('default', ['styl']);
```

This will load the task `styl` that is inside the folder 'tasks`.

## Example

Run `npm i` into `gulp` folder.

Now, modify the `main.styl` file on `dev/styl`.

Run `gulp` and watch the magic!
