var gulp	=	require('gulp'),
	less	=	require('gulp-less'),
	twig	=	require('gulp-twig'),
	browserSync	=	require('browser-sync').create();

gulp.task('less', function() {
    gulp.src(['./custom-less/tema.less'])
      .pipe(less())
      .pipe(gulp.dest('../assets/css'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
    gulp.src(['./node_modules/uikit/dist/js/uikit.js','./node_modules/uikit/dist/js/uikit-icons.js'])
      .pipe(gulp.dest('../assets/js'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('twig', function () {
    gulp.src('../templates/**/*.twig');
});
gulp.task('serve', function() {
    browserSync.init({
        proxy: "http://localhost:8888/tema_base/"
    });
    gulp.watch('./custom-less/tema.less', ['less']);
	gulp.watch('../templates/**/*.twig', ['twig']);
});

gulp.task('default', ['less', 'js', 'serve']);
