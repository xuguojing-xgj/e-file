/**
* 将时间戳转换为 YYYY-MM-DD 时间格式
*/

let time = new Date(cellValue);
console.log(time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate());
let formatDate = time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()

/**
* 获取当前时间戳
*/

var timestamp = (new Date()).valueOf();
// 结果：1477808630404 通过valueOf()函数返回指定对象的原始值获得准确的时间戳值
 
 
 
var timestamp=new Date().getTime()；
// 结果：1477808630404 ，通过原型方法直接获得当前时间的毫秒值，准确
 
 
 
var timestamp4=Number(new Date())；
// 结果：1477808630404 ,将时间转化为一个number类型的数值，即时间戳


// 原文链接：'https://blog.csdn.net/weixin_42333548/article/details/80539239'
