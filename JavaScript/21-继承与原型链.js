/**
* 如何继承一个对象
* 1. 可以使用 new 实例 prototype 进行继承
* 2. 可以使用 Object.create() 进行继承
*/
 function doSomething() {}
 doSomething.prototype.Foo = 'Bar'
 // 创建实例对象            
 let doSomeInstancing = new doSomething() // 使用new 关键字 创建的 实例身上才有 prototype 而 赋值给doSomeInstancing身上是没有prototype
 // 在doSomeInstancing 添加属性 或者方法 直接. 就可以
 doSomeInstancing.prop = "some value";

let a = {
    name: '小明'
}
a.fn = () => {
    console.log('1');
}
console.log(a); 
let b =  Object.create(a) // 创建一个空对象 并继承放入对象的属性和方法
b.age = 18  // b 作为新创建的对象 也可以添加属性 和 方法

console.log(b);

/**
*  如何创建一个对象
* 
*/
