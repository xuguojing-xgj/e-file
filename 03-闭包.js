//  闭包的作用 :
// 延长变量的生命周期 创建私有环境
//  什么是闭包?
//  在函数外面访问函数里面的变量

function foo() {
    let a = 1
    function bar() {
        console.log(a)
    }
    return bar
}
let baz = foo()
baz()
