// 模块化 : 封装属性和方法到一个文件夹中 导出使用
const text = '这是一个文本'
const fn = () => {
    console.log('我算是一个fn放法');
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