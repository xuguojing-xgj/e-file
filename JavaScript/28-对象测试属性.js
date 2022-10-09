/**
 * JavaScript 对象可以被想象成一组属性
 * 实际开发中需要测试这组属性的成员关系
 * 即检查对象是否有一个给定名字的属性
 */

// 为此 可用 in操作符
// hasOwnProperty()
// propertyIsEnumerable()


/**
 * in 操作符要求 左边是一个 属性名(键) 右边是一个对象
 * 如果对象中包含相应名字的自有属性或继承属性, 将返回true 否则 返回false
 */
let o = { x: 1 };

let test = 'x' in o // => true
let test2 = 'y' in o // => false
let test3 = 'toString' in o // => 'toString' 是o 的继承属性所以返回 true

console.log(test);
console.log(test2);
console.log(test3);

/**
 * hasOwnProperty() 方法用于测试对象是否有给定名字的属性
 * 对继承的属性 它返回 false
 */

let obj = { i: 2 }
let w1 = obj.hasOwnProperty('i') // true
let w2 = obj.hasOwnProperty('q') // false
let w3 = obj.hasOwnProperty('toString') // false , 因为toString 是继承属性

console.log(w1);
console.log(w2);
console.log(w3);

/**
 * propertyIsEnumerable() 方法细化了 hasOwnProperty() 测试
 * 如果传入的 命名属性是自有属性且这个属性的enumerable(可枚举的) 特性为 true, 这个方法返回true
 * 某些内置属性是不可枚举的, 使用常规的 JavaScript 代码创建的属性都是可枚举的,
 * 除非将它们限制为 不可枚举的
 */

let h = { p: '空悲切' }
let _p = h.propertyIsEnumerable('p') // 返回true  h是可枚举属性p
let _p1 = h.propertyIsEnumerable('toString') // false : toString 不是自有属性
let objP = Object.prototype.propertyIsEnumerable('toString') // false : toString不可枚举

// console.log(objP);


/**
 * 除了使用 in 操作符 还可以配合 !== 确保不是未定义
 */

let r = { e: 1 }

console.log(r.e !== undefined);
console.log(r.y !== undefined);
console.log(r.toString !== undefined);


let t = { u: undefined }

console.log(t.u !== undefined);
console.log(t.y !== undefined);
console.log('u' in t);
console.log('y' in t);
delete t.u
console.log('u' in t);
