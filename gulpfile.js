const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("default", async () => {
  return console.log("Success!");
});

gulp.task("serve:dev", async () => {
  browserSync.init({
    server: "build",
    port: 3005,
    ghostMode: false,
    logPrefix: "Untitled-Base-Building",
    online: false,
    reloadOnRestart: true,
    reloadDebounce: 1000,
    notify: false,
  });
});
