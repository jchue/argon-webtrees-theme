var gulp = require('gulp');

var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
const url = require("postcss-url");

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

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

function js() {
    return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('resources/js/'));
}

function watch() {
    gulp.watch(['src/scss/**/*.scss'], scss);
    gulp.watch(['src/js/**/*.js'], js);
}

exports.watch = watch;
exports.default = gulp.parallel(scss, js);
