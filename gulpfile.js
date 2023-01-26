const { src, dest } = require("gulp");
const htmlmin = require('gulp-htmlmin')

const htmlTask = () => {
  return src("./src/**/*.html").pipe(htmlmin({ collapseWhitespace: true })).pipe(dest("./dist"));
};

module.exports = {
  htmlTask,
};