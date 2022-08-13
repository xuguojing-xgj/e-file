// find 在数组内 查找与条件相符合的第一个元素 找到直接原地返回 不会继续往后查找  不会改变原数组

let arr = [1, 3, 4, 5, 6, 7, 8, 10, 2]
let result = arr.find(item => item < 5)
// console.log(result)
// console.log(arr)

// filter 查找数组内 所有符合条件的元素 也不会改变原数组
let res = arr.filter(item => item < 5)
console.log(res)
console.log(arr)