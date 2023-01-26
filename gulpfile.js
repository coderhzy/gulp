const { src,dest } = require('gulp')
const copyFile = (cb) => {
    // 1. 读取文件 
    src('./src/**/*.js').pipe(dest('./dist')) 
    cb()
}

module.exports = {
    copyFile
} 