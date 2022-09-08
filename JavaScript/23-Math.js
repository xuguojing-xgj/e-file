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

