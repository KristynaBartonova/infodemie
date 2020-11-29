'use strict';

const {src, dest, watch} = require('gulp');
const compileSass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

compileSass.compiler = require('node-sass');

const devWatch = () => {
    watch('./scss/**/*.scss', bundleSass);
}

const bundleSass = () => {
    return src('./scss/app.scss')
        .pipe(sourceMaps.init())
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(minifyCss())
        .pipe(sourceMaps.write())
        .pipe(concat('style.css'))
        .pipe(dest('./css/'));
}

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;