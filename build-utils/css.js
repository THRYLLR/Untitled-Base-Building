const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const postCSS = require("gulp-postcss");
const rename = require("gulp-rename");
const { resolve } = require("path");

gulp.task("css:build:dev", async () => {
  return gulp
    .src(resolve("src", "css", "main.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(postCSS([require("postcss-preset-env")()]))
    .pipe(rename("main.dev.css"))
    .pipe(gulp.dest(resolve("build")));
});

gulp.task("css:full:dev", gulp.series("css:build:dev"));
