/**
 * Math.abs(x)  函数行为 返回指定数字 x 的绝对值
 * 传入一个非数字形式的字符串 或者是 undefined 返回NAN
 * 传入 null [] '' 返回0
 */

let res = Math.abs([-9])
console.log(res);

/**
 * Math.acos(x) 方法 以 -1 到 1 的一个数为参数 
 * 返回一个给定 0 到 pi(弧度的数值) 
 * x 值小于 -1 或者是 大于 1  acos 返回NAN
 */

let res1 = Math.acos(0.2)
console.log(res1);

/**
 * Math.acosh(x)  方法返回一个给定数的反双曲余弦值, 如果x小于1 返回NAN
 * x 是 1 返回 0
 */

let res2 = Math.acosh(99)
console.log(res2);

/**
 * Math.asin(x) 方法接收一个 -1 到 1 之间的数值作为参数 
 * 返回一个介于 -π/2 到 π/2 弧度的值 
 * 如果参数 不在 -1 到 1 之间 则返回NAN
 */

let res3 = Math.asin(-0.0009)
console.log(res3);

/**
 * Math.floor() 方法 向下取整
 * 
 */

let res4 = Math.floor(-90.99)
console.log(res4);

/**
 * Math.fround() 可以将任意数字转换成离它最近的<单精度浮点数>
 * 返回值 : 指定数字最接近的 32 位单精度浮点数表示。
 * 参数 : 一个number 若参数为非数字类型 则会被转投成数字 无法转换时 设置成NAN
 * 2^150 超出 32 位浮点，所以返回Infinity 
 */

let res5 = Math.fround(0.1) == Math.fround(0.2)
console.log(res5);

function equal(V1, V2) {
    return Math.fround(V1) == Math.fround(V2)
}

let res6 = equal(0.1 + 0.2, 0.3)
console.log(res6);

/**
 * Math.ceil() 向上取整 负数则给最小负数
 */

let res7 = Math.ceil(-9.1)
console.log(res7);

/**
 * Math.random() 返回 0-1 之间的 随机数
 * 0 之上包括0 不包括 1
 */

let res8 = Math.random() * 10
console.log(res8);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); // 10
    max = Math.floor(max); // 15
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

let res9 = getRandomIntInclusive(9.1, 15.1)
console.log(res9);
