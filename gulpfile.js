"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const del = require("del");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./public/"
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function styles() {
    return gulp
        .src("./assets/styles/main.css")
        .pipe(plumber())
        .pipe(postcss())
        .pipe(gulp.dest("public/css"))
        .pipe(browsersync.stream());
}

function scripts() {
    return gulp
        .src('assets/scripts/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(browsersync.stream());
}

function images() {
    return gulp
        .src("./assets/img/**/*")
        .pipe(newer("./public/img"))
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ])
        )
        .pipe(gulp.dest("./public/img"));
}

function html() {
    return gulp
        .src("./assets/html/*.html")
        .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
        .pipe(gulp.dest('./public/'))
        .pipe(plumber())
        .pipe(browsersync.stream());
}

function clean() {
    return del(['public/css', 'public/js']);
}

// Watch files
function watchFiles() {
    gulp.watch("./assets/html/**/*", html);
    gulp.watch("./assets/styles/**/*", styles);
    gulp.watch("./assets/scripts/**/*", scripts);
    gulp.watch("./assets/img/**/*", images);
    gulp.series(browserSyncReload);
}

// define complex tasks
const build = gulp.series(clean, gulp.parallel(html, styles, images, scripts));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;