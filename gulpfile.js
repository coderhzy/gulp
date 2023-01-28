const { src, dest, parallel, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const less = require("gulp-less");
const inject = require("gulp-inject");

// 1. 对html进行打包
const htmlTask = () => {
  return src("./src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./dist"));
};

// 2, 对js进行打包
const jsTask = () => {
  return src("./src/**/*.js").pipe(babel()).pipe(terser()).pipe(dest("./dist"));
};

// 3. 对less打包
const lessTask = () => {
  return src("./src/**/*.less").pipe(less()).pipe(dest("./dist"));
};

// 4. 对html中的js和css进行注入
const injectTask = () => {
  return src("./dist/**/*.html")
    .pipe(
      inject(src(["./dist/**/*.js", "./dist/**/*.css"]), { relative: true })
    )
    .pipe(dest("./dist"));
};

// 5. 创建打包任务
const buildTask = parallel(htmlTask, jsTask, lessTask);
const finalTask = series(buildTask, injectTask);

module.exports = {
  finalTask,
};
