var gulp = require('gulp');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var gutil = require('gulp-util');
var shell = require('gulp-shell');

gulp.task('copy-assets', function() {
  return gulp.src('src/static/**').pipe(gulp.dest('public'));
});

gulp.task("webpack:build", function(callback) {
  return webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError("webpack:build", err);
    }
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

devCompiler = webpack(webpackConfig);

gulp.task("webpack:build-dev", function(callback) {
  devCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError("webpack:build-dev", err);
    }
    gutil.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

devServer = {};

gulp.task("webpack-dev-server", function(callback) {
  devServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: './public/',
    hot: true,
    watchOptions: {
      aggregateTimeout: 100
    },
    noInfo: true
  });
  devServer.listen(8000, "0.0.0.0", function(err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }
    gutil.log("[webpack-dev-server]", "http://localhost:8000");
    return callback();
  });
});

gulp.task('default', function() {
  return gulp.start('build');
});

gulp.task('build', ['webpack:build', 'copy-assets']);

gulp.task('watch', ['copy-assets', 'webpack-dev-server'], function() {
  return gulp.watch(['assets/**'], ['copy-assets']);
});

gulp.task('test', shell.task(['./node_modules/.bin/mocha']));

gulp.task('test:safe', shell.task(['./node_modules/.bin/mocha || true']));

gulp.task('test:watch', ['test:safe'], function() {
  return gulp.watch(['src/scripts/**', 'spec/**'], ['test:safe']);
});