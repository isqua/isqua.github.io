var nbld = require('nbld');
var gulp = require('gulp');

nbld(gulp, {
    src: './src',
    dest: './build',
    metrika: 28698696
});

gulp.task('img', function () {
    gulp.src('src/favicon.ico')
        .pipe(gulp.dest('./build'));

    return gulp.src('src/img/*')
        .pipe(gulp.dest('./build/img'));
});

gulp.task('production', [ 'jade', 'img' ]);
