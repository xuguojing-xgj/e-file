// 匹配 : 验证当前字符串是否符合规则 (test)

// 捕获 : 把字符串中符合规则的部分捕获到(exec / match / test)

let re = /^\d+$/ // 只能是数字一到多位 ^caret符
console.log(re.test('100')); // 返回 true OR false
