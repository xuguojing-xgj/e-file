//  闭包的作用 :
// 延长变量的生命周期 创建私有环境
//  什么是闭包?
//  在函数外面访问函数里面的变量

function foo() {
    let a = 'a'
    function bar() {
        console.log(a)
    }
    return bar
}
let baz = foo()
baz()

let containerFn = function fn1() {
    let num = 0
    function changeBy(val) {
        num += val
    }

    return {
        add: function () {
            changeBy(1)
        },
        reduce: function () {
            changeBy(-1)
        },
        value: function () {
            return num
        }
    }
}
let content1 = containerFn()
let content2 = containerFn()

content1.add()
content1.add()
content2.add()

console.log(content2.value()); // 1
console.log(content1.value()); // 2

// 闭包 都拥有自己独立的 作用域
// 面向对象的编程 -> 数据的隐层 和 封装