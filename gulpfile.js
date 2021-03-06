var gulp = require('gulp');
var markdownpdf = require('gulp-markdown-pdf');

gulp.task('buildpdf', function() {
  console.log(__dirname+'/css/pdf.css')
  options = {
    cssPath: __dirname+'/css/pdf.css'
  }

  gulp.src('./README.md')
      .pipe(markdownpdf(options))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['buildpdf']);
