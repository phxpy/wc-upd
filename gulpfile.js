const { src, dest, series, parallel, watch } = require('gulp');
const plumber = require('gulp-plumber');
const del = require('del');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const newer = require('gulp-newer');
const prettify = require('gulp-html-prettify');
const htmlmin = require('gulp-htmlmin');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

let isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// HTML Processing
function html() {
    return src('src/pages/index.html')
        .pipe(plumber())
        .pipe(posthtml([include()]))
        .pipe(gulpIf(isDev, prettify({ indent_char: ' ', indent_size: 4 })))
        .pipe(gulpIf(!isDev, htmlmin({
            collapseWhitespace: true,
            removeComments: true
        })))
        .pipe(dest('build/'));
}

// CSS Processing
function css() {
  return src('src/styles/styles.scss')
    .pipe(plumber())
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulpIf(!isDev, csso()))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(dest('build/css'))
    .pipe(browserSync.stream());
}

// JS Processing
function js() {
    return src('src/js/*.js')
        .pipe(plumber())
        .pipe(gulpIf(isDev, sourcemaps.init()))
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulpIf(!isDev, uglify()))
        .pipe(gulpIf(isDev, sourcemaps.write()))
        .pipe(dest('build/js'));
}

// IMG copying
function copyImg() {
    return src(['src/img/**/*.{jpg,JPG,jpeg,png,webp,svg}'])
        .pipe(newer('build/img'))
        .pipe(dest('build/img'));
}

// ASSETS copying
function copy() {
    return src('src/assets/**/*.*')
        .pipe(dest('build'));
}

// Local server setup
function server() {
    browserSync.init({
        server: {
            baseDir: 'build'
        },
        notify: false
    });

    watch("src/pages/**/*.html", series(html, refreshPage));
    watch("src/styles/**/*.scss", series(css, refreshPage));
    watch("src/js/**/*.js", series(js, refreshPage));
    watch("src/img/**/*.*", series(copyImg, refreshPage));
}

function refreshPage(done) {
    browserSync.reload();
    done();
}

// Clean build directory
function clean() {
    return del('build');
}

exports.start = series(clean, parallel(copyImg, copy, js, css), html, server);
exports.build = series(clean, parallel(copyImg, copy, js, css), html);
exports.clean = clean;
