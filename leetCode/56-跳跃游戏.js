// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。

// 示例 1:

// 输入: [2,3,1,1,4]
// 输出: true

// 示例 2:

// 输入: [3,2,1,0,4]
/**
 * 
 * @param {*} nums 
 */

function fourSum(nums) {
    let jump = [] // 保存每个位置 可以达到的最远位置
    for (let i = 0; i < nums.length; i++) {
        jump.push(i + nums[i]) // 初始化jump 数组, jump[i] = i + nums[i]

    }

    let index = 0 // 储存当前所在位置
    let max_jump = jump[0] // 储存当前可以达到最远位置 初始化为 jump[0]
    while (index < jump.length && index <= max_jump) {
        // 如果 可达到最远距离 max_jump 小于 jump[index] 
        if (max_jump < jump[index]) {
            // 将 max_jump 更新为 jump[index]
            max_jump = jump[index]
        }
        index++ // 通过 while 循环 遍历 jump数组
    }
    if (index == jump.length) { // index 为数组长度 
        return true // 该问题 有解 返回true 
    }
    return false // 否则返回 false
}
let res = fourSum([2, 4, 2, 3, 1, 0, 0])
console.log(res);
