const gulp = require("gulp");
const webpack = require("webpack-stream");

gulp.task("js:bundle:dev", async () => {
  return gulp
    .src("../src/js/**/*.js")
    .pipe(webpack(require("./webpack.config.js")(true)));
});
