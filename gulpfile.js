const { series  } = require('gulp');
const {parallel }= require('gulp');

const foo = (cb) => {
    setTimeout(() => {
        console.log('foo');
        cb()
    }, 2000)
}

const coco = (cb) => {
    setTimeout(() => {
        console.log('coco');
        cb()
    }, 2000)
}

const bar = (cb) => {
    setTimeout(() => {
        console.log('bar');
        cb()
    }, 2000)
}

const seriesFoo = series(foo, coco, bar);
const parallelFoo = parallel(foo, coco, bar);

module.exports = {
    seriesFoo,
    parallelFoo
}