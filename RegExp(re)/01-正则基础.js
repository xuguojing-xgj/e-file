// 匹配 : 验证当前字符串是否符合规则 (test)

// 捕获 : 把字符串中符合规则的部分捕获到(exec / match / test)

/**
 * test() 方法 返回 true 和 false
 */
let re = /^\d+$/ // 只能是数字一到多位 ^caret符
console.log(re.test('100')); // 返回 true OR false



/**
 * exec() 方法 指定字符串中搜索 返回一个数组或null 
 */

