const gulp = require("gulp");
const webpack = require("webpack-stream");
const path = require("path").resolve;

gulp.task("js:build:dev", async () => {
  return gulp
    .src(path("src", "js", "main.js"))
    .pipe(webpack(require("./webpack.config.js")(true)))
    .pipe(gulp.dest(path("build")));
});

gulp.task("js:full:dev", async () => {
  gulp.series("js:build:dev");
});
