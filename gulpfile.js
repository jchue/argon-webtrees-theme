var gulp = require('gulp');
var replace = require('gulp-replace');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
const url = require("postcss-url");

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

var del = require('del');

/* Sass/CSS */

function scss() {
    // Inline assets using base64 encoding
    const options = {
        url: 'inline'
    };

    var plugins = [
        autoprefixer(),
        cssnano(),
        url(options)
    ];

    return gulp.src('src/scss/theme.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('resources/css'));
}

function cssBuild() {
    return gulp.src('resources/css/**/*')
    .pipe(gulp.dest('dist/resources/css/'));
}

/* JavaScript */

function jsTranspile() {
    return gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('resources/js/'));
}

function jsBuild() {
    return gulp.src('resources/js/**/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/resources/js/'));
}

/* Webtrees */

function copyViews() {
    return gulp.src('resources/views/**/*')
    .pipe(gulp.dest('dist/resources/views/'));
}

function copyModule() {
    return gulp.src('module.php')
    .pipe(gulp.dest('dist/'));
}

/* Utilities */

function clean() {
    return del('dist/**/*');
}

function watch() {
    gulp.watch(['src/scss/**/*.scss'], scss);
    gulp.watch(['src/js/**/*.js'], jsTranspile);
}

exports.watch = watch;
exports.build = gulp.series(
    clean,
    gulp.parallel(scss, jsTranspile),
    gulp.parallel(cssBuild, jsBuild, copyViews, copyModule)
);
exports.default = gulp.parallel(scss, jsTranspile);
