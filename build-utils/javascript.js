const gulp = require("gulp");
const webpack = require("webpack-stream");
const { resolve } = require("path");

gulp.task("js:build:dev", async () => {
  return gulp
    .src(resolve("src", "js", "main.js"))
    .pipe(webpack(require("./webpack.config.js")(true)))
    .pipe(gulp.dest(resolve("build")));
});

gulp.task("js:full:dev", gulp.series("js:build:dev"));
