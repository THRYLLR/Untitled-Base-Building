const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const del = require("del");
const path = require("path");
require("require-dir")("./build-utils");

gulp.task("clean:dev", async () => {
  await del([path.posix.join("build", "**", "*")]);
});

gulp.task(
  "build:full:dev",
  gulp.series(
    "clean:dev",
    gulp.parallel("js:full:dev", "css:full:dev"),
    "html:full:dev"
  )
);

gulp.task("serve:dev", async () => {
  browserSync.init({
    server: "build",
    port: 3005,
    ghostMode: false,
    logPrefix: "Untitled-Base-Building: Dev",
    online: false,
    reloadOnRestart: true,
    reloadDebounce: 1000,
    notify: false,
  });

  gulp.watch("src/css/**/*", gulp.series("css:full:dev", "html:full:dev"));
  gulp.watch("src/js/**/*", gulp.series("js:full:dev", "html:full:dev"));
  gulp.watch("src/html/**/*", gulp.series("html:full:dev"));
  gulp.watch("build/**/*", gulp.series("reload:dev"));
});

gulp.task("reload:dev", async () => {
  console.log("Files have been changed.");
  browserSync.reload("*");
});

gulp.task("default", gulp.series("build:full:dev", "serve:dev"));
