const { dest } = require("gulp"),
    gulp = require("gulp"),
    prefix = require("gulp-autoprefixer"),
    sass = require("gulp-sass")(require("sass"));


/**
 *
 * Convert SCSS to css in Guest Style
 * Minify CSS File
 *
 */

gulp.task("css", async function () {
    return gulp
        .src("assets/styles/*.scss") // Get SCSS files from Guest folder
        .pipe(sass({ outputStyle: "compressed" })) // Convert SCSS to CSS file
        .pipe(prefix("last 2 versions")) // Prefix css files for the last 2 browsers versions
        .pipe(dest("assets/styles")); // copy inside public folder
});

gulp.task("watch-sass", async function () {
    gulp.watch("assets/styles/*.scss", gulp.task("css"));
});

