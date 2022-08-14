/**
 * async 和 defer 相同点: 
 * 加载文件时不会阻塞页面渲染
 * 对于内部的js不起作用
 * 使用这两个属性的脚本中不能调用document.write方法
 * 
 * async 和 defer 的区别
 *  
 * defer (IE支持) js脚本不会影响页面的构建 浏览器会下载js 脚本 但延迟执行 当整个页面都被解析完成之后才会加载js 脚本
 * defer 会按照js 在页面中的顺序一次加载 
 * 比如 <script src="template1.js"> </script>
 *      <script src="template2.js"> </script>
 * template1 一定会在 template2 之前加载
 * 
 * async js脚本和页面一起加载 浏览器 遇到async时 不会阻塞页面渲染 而是直接下载运行 
 * 这样导致 js 次序无法控制 文件小的 首先加载完成 排到前面 而大文件 则会最后加载完成
 */

console.log(document.querySelector('div'));
console.log(document.getElementById('conternai'));