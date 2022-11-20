const promise1 = Promise.resolve('190')

const promise2 = 42

// const promise2_1 = Promise.reject('reject')
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('100', 'foo')
    }, 2000)
}).finally((finallyQ) => {
    console.log('finallyQ');
})

Promise.all([promise1, promise2, promise3]).then((vals) => {
    console.log(vals)
})
