var gulp = require("gulp");
var babel = require("gulp-babel");
var ghPages = require('gulp-gh-pages');
var sync = require('browser-sync').create();

gulp.task("default", function () {
  return gulp.src("scripts/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/*')
    .pipe(ghPages());
});

gulp.task('serve', function() {
  sync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/scripts/**/*.js', ['js']);
  gulp.watch('./dist/**/*.html').on('change', sync.reload);
  gulp.watch('./dist/**/*.js').on('change', sync.reload);
});
