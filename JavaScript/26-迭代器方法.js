// 迭代器方法

const a = ['foo', 'bar', 'baz', 'qux']

/**
 * 这些方法都返回的迭代器
 * 通过Array.from() 直接转换为数组实例
 */

let AKeys = Array.from(a.keys()) // 返回 数组索引的迭代器
let AValues = Array.from(a.values()) // 返回 数组元素的迭代器
let AEntries = Array.from(a.entries())// 返回 索引/值对的迭代器
console.log(AKeys);
console.log(AValues);
console.log(AEntries);

// 使用es6 的结构 可以非常容易的在循环中 拆分 键/值对

for (const [index, element] of a.entries()) {
    console.log(index);
    console.log(element);
}