var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var cleanCSS = require("gulp-clean-css");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var pump = require("pump");
var imageResize = require("gulp-image-resize");
var parallel = require("concurrent-transform");
var os = require("os");
var sass = require('gulp-sass');

var paths = {
  scripts: "src/js/*.js",
  sass: "src/css/scss/*.scss",
  css: "src/css/*.css",
  images: "src/img/**/*",
  screenshots: "src/img/screenshots/**/*"
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task("clean", function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(["build"]);
});

gulp.task("scripts", function(cb) {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  pump(
    [
      gulp.src(paths.scripts),
      uglify(),
      concat("all.min.js"),
      gulp.dest("public/js")
    ],
    cb
  );
});

gulp.task("compile-sass", function() {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./src/css/"))
})

gulp.task("minify-css", ["compile-sass"], function() {
  return gulp
    .src(paths.css)
    .pipe(cleanCSS())
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("public/css"));
});

// Copy all static images
gulp.task("images", function() {
  return (gulp
      .src(paths.images)
      // Pass in options to the task
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(gulp.dest("public/img")) );
});

// gulp.task("screenshots-thumbnails", ["images"], function() {
//   return gulp
//     .src(paths.screenshots)
//     .pipe(
//       parallel(
//         imageResize({
//           width: 250,
//           height: 150,
//           crop: true,
//           upscale: false,
//           quality: 1
//         }),
//         os.cpus().length
//       )
//     )
//     .pipe(gulp.dest("build/img/screenshots/thumbnails"));
// });

// Rerun the task when a file changes
gulp.task("watch", function() {
  gulp.watch(paths.scripts, ["scripts"]);
  gulp.watch(paths.sass, ["compile-sass"]);
  gulp.watch(paths.css, ["minify-css"]);
  gulp.watch(paths.images, ["images"]);
});

// The default task (called when you run `gulp` from cli)
gulp.task("default", [
  "watch",
  "scripts",
  "compile-sass",
  "minify-css",
  "images"
  // "screenshots-thumbnails"
]);
