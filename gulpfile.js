
const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
	  cleanCSS = require('gulp-clean-css'),
	  pug = require('gulp-pug'),
	  minifyJs = require('gulp-js-minify'),
	  browserSync = require('browser-sync').create();



// compile .scss files
function sassCompile() {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
        	level: 2
        }))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream());
}

// compile .pug files
function pugCompile() {
	return gulp.src('./src/**/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.stream());
}


// minify .js files
function jsMinify(){
	return gulp.src('./src/js/**/*.js')
	.pipe(minifyJs())
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}


function watch() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./src/scss/**/*.scss', sassCompile)
	gulp.watch('./src/**/*.pug', pugCompile)
	gulp.watch('./src/js/**/*.js', jsMinify)
	gulp.watch('./*.html').on('change', browserSync.reload);
}


gulp.task('sass', sassCompile);
gulp.task('pug', pugCompile);
gulp.task('js', jsMinify);

gulp.task('watch', watch);

