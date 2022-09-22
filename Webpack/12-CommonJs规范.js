// 模块化 : 封装属性和方法到一个文件夹中 导出使用
const text = '这是一个文本'
const fn = () => {
    console.log('我是一个fn方法');
}


// CommonJS 规范
// 导出 : module.exports
// 导入 : require

module.exports = {
    mytext: text,
    fn
}

//  模块标识
// (1): "http" - 核心模块 (node自带)
// (2): "moment" - 第三方模块(需要npm 下载)
// (2): "./files.js" - 自己定义的模块


// es6 语法
// 默认导出 export default {...}
// 默认导入 import 模块名 from '文件'
export default {
    mytext: text,
    fn
}

// 按需导出
export const name = '小明'
