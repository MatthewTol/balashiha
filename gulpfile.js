const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', (done) => {

  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

  gulp.watch("./*.html").on('change', browserSync.reload);

  done();
});