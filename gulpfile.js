var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
	//El style.scss puede ser sustituido por *.scss si hay más de un archivo de esta extensión
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/style.scss'])
	.pipe(sass())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src(['node_modules/bootstrap/dist/bootstrap.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/tether/dist/tether.js'])
	.pipe(gulp.dest('src/js'))
	.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server:'./src'
	});
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/style.scss'], ['sass']);
	gulp.watch('src/index.html').on('change', browserSync.reload);
});