var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
//    pug = require('gulp-pug'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('images', function () {
    gulp.src('src/images/**/*')
        .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('styles', function () {
    gulp.src(['src/styles/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/styles/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/styles/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(babel())
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'))
        .pipe(browserSync.reload({stream: true}))
});

//gulp.task('pug', function buildHTML() {
//    return gulp.src('src/views/**/*.pug')
//   .pipe(pug())
//   .pipe(gulp.dest('./'))
//   .pipe(browserSync.reload({stream: true}))
//});


gulp.task('default', ['browser-sync'], function () {
    gulp.watch("src/styles/**/*.scss", ['styles']);
    gulp.watch("src/scripts/**/*.js", ['scripts']);
//    gulp.watch("src/views/**/*.pug", ['pug']);
    gulp.watch("*.html" ['bs-reload']);
});