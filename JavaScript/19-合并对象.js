let a = { a: 1, b: 4 }
let b = { b: 2, c: 3 }

// 第一种方法 使用Object.assign()
let obj = Object.assign(a, b)
console.log(obj);

// 第二种方法使用 ... 扩展运算符
let obj1 = { ...a, ...b }
console.log(obj1);

// 自己封装方法
function extend(target, source) {
    for (let keyVal in source) {
        target[keyVal] = source[keyVal]
    }
    return target
}
let res = extend(a, b)
console.log(res);
