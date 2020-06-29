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
  gulp.series("clean:dev", "js:full:dev", "css:full:dev", "html:full:dev")
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
});

gulp.task("default", gulp.series("build:full:dev", "serve:dev"));
