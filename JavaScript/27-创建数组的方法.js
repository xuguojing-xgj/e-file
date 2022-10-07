/**
 * 数组字面量
 * 可迭代对象使用 ...扩展操作符
 * Array 构造函数
 * 工厂方法 Array.of() 和 Array.from()
 */

// 字面量
let arr = []
// ... 扩展操作符
let a = [1, 3, 4]
let b = [...a, 0.1, true]
// Array 构造函数

let c = new Array(10, 123, 1, true)
console.log(c);

// 工厂方法 Array.of() 和 Array.from()

let r1 = Array.of() // ->  []
let r2 = Array.of(12) // -> [12]
let r3 = Array.of(12, 2, 2) // -> [12,2,2]

//  Array.from() 是ES6新增的工厂方法 该方法期待一个可迭代对象 或者类数组对象作为其第一个参数
// 并返回该对象元素的新数组
// 如果传入可迭代对象 Array.from() 与使用扩展操作符 [...a] 一样
let q1 = Array.from()