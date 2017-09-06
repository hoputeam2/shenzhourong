var gulp = require("gulp");
var watch = require("gulp-watch");
var sass = require("gulp-sass");
var rev = require("gulp-rev");
var revCollector = require("gulp-rev-collector");
var mincss = require("gulp-minify-css");
var minhtml = require("gulp-minify-html");
var jsmin = require("gulp-uglify");
var imgmin = require("gulp-imagemin");

gulp.task("sass",function(){
  gulp.src("./scss/*.scss")
  .pipe(sass())
  .pipe(gulp.dest("./dist/css"))
})

gulp.task("watch",function(){
  gulp.watch("./scss/*.scss",["sass"])
})

gulp.task('rev', function () {
return gulp.src(['rev/**/*.json', './html/*.html'])
  .pipe( revCollector({
        replaceReved: true,
        dirReplacements: {
            '../css': '../cssmin',
            '../js': '../jsmin',
          }
        })
      )
      .pipe(minhtml({
        empty:true,
        spare:true
        }
      ))
      .pipe(gulp.dest("./dist/htmlmin"))

})

gulp.task("cssmin",function(){
    gulp.src("./dist/css/*.css")
        .pipe(rev())
        .pipe(mincss())
        .pipe(gulp.dest("./dist/cssmin"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./rev/cssmin"))
});
gulp.task("htmlmin",function(){
    gulp.src("./html/*.html")
        .pipe(rev())
        .pipe(minhtml())
        .pipe(gulp.dest("./dist/htmlmin"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./rev/htmlmin"))
});
gulp.task("jsmin",function(){
    gulp.src("./js/*.js")
        .pipe(rev())
        .pipe(jsmin())
        .pipe(gulp.dest("./dist/jsmin"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./rev/jsmin"))
});

gulp.task("imgmin",function(){
    gulp.src("./img/**/*.{jpg,jpeg,png,gif}")
        .pipe(imgmin())
        .pipe(rev())
        .pipe(gulp.dest("./dist/img"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./rev/img"))
});
