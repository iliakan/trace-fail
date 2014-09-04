/**
 * NB: All tasks are initialized lazily, even plugins are required lazily,
 * running 1 task does not require all tasks' files
 */

const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const assert = require('assert');
const gp = require('gulp-load-plugins')();

require('trace');

gulp.task('default', function() {

    return gulp.src('./styles/base.styl')
      // without plumber if stylus emits PluginError, it will disappear at the next step
      // plumber propagates it down the chain
      .pipe(gp.plumber({errorHandler: gp.notify.onError("<%= error.message %>")}))
      .pipe(gp.stylus({use: [require('nib')()]}))
      .pipe(gp.autoprefixer("last 1 version"))
      .pipe(gulp.dest('./public/styles'));
});

