const gulp = require("gulp");
const dom = require("gulp-dom");
const rename = require("gulp-rename");
const { resolve } = require("path");
const { link } = require("fs");

function SRIHash(path) {
  return (
    "sha512-" +
    require("crypto")
      .createHash("sha512")
      .update(require("fs").readFileSync(path))
      .digest("base64")
  );
}

gulp.task("html:prepare:dev", async () => {
  return gulp
    .src(resolve("src", "html", "index.html"))
    .pipe(require("gulp-wait")(500))
    .pipe(
      dom(function () {
        const document = /** @type {Document} */ (this);

        //Add JavaScript
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", "/bundle.dev.js");
        script.setAttribute(
          "integrity",
          SRIHash(resolve("build", "bundle.dev.js"))
        );
        document.head.appendChild(script);

        //Add CSS
        var style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("type", "text/css");
        style.setAttribute("href", "/main.dev.css");
        style.setAttribute(
          "integrity",
          SRIHash(resolve("build", "main.dev.css")) //dev.css
        );
        document.head.appendChild(style);

        return document;
      })
    )
    .pipe(rename("index.html"))
    .pipe(gulp.dest(resolve("build")));
});

gulp.task("html:full:dev", gulp.series("html:prepare:dev"));
