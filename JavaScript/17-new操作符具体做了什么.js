/**
 * 1. 创建一个空对象
 * 2. 将空对象的原型, 指向与构造函数的原型
 * 3. 改变this 指向
 * 4. 判断这个构造函数有没有返回值 (如果构造函数返回的是基本类型, 则忽略这个返回值)
 */

function func(age, name) {
    this.age = age
    this.name = name
}

function create(fn, ...args) {
    // 1. 创建一个空对象
    var obj = {} // var obj = Object.create({})
    // 2. 将空对象的原型, 指向与构造函数的原型
    Object.setPrototypeOf(obj, fn.prototype)
    // 3. 改变this 指向
    var result = fn.apply(obj, args)
    // 4. 对构造函数返回值处理判断
    return result instanceof Object ? result : obj
}

console.log(create(func, 18, '夏木木'));
