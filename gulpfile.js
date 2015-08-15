var gulp = require('gulp')
var sass = require('gulp-sass')
var plumber = require('gulp-plumber')
var concat  = require('gulp-concat')
var rename  = require('gulp-rename')
var minCSS  = require('gulp-minify-css')
var prefix  = require('gulp-autoprefixer')
var neat    = require('node-neat').includePaths

var handleErrors = require('./gulp/util/handleErrors')

var styles  = './src/css/*.scss'

gulp.task('styles', function(){
  return gulp.src(styles)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(prefix(['ie 9','last 2 versions', '> 5%'], { cascade: true }))
        .pipe(concat('screen.css'))
        .pipe(gulp.dest('./assets/css'))
})

gulp.task('default', ['styles'])
