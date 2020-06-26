const gulp = require("gulp");
const webpack = require("webpack-stream");
const buildFolder = require("path").join(__dirname);

gulp.task("js:bundle:dev", async () => {
  return gulp
    .src("../src/js/**/*.js")
    .pipe(webpack(require("./webpack.config.js")(true)))
    .pipe(gulp.dest("../build"));
});
