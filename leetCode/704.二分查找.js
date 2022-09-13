// 二分查找 目标值返回索引 否则返回 -1
// 左闭右闭  写法
let search = function (nums, target) {
    // right 为数组最后一个下标 nums[right] 在查找范围内 是左闭右闭 区间
    let left = 0, right = nums.length - 1
    while (left <= right) {
        // Math.floor(x)
        // 返回小于一个数的最大整数,即一个数向下取整后的值.
        let mid = left + Math.floor((right - left) / 2)
        // 如果中间数大于目标值 
        // 要把中间数排除查找范围 
        // 所以有边界 更新为 mid -1 
        // 如果右边界更新为mid，那中间数还在下次查找范围内
        //  nums[mid] 中间索引 大于 target 时  mid - 1 
        if (nums[mid] > target) {
            // 每次循环时 -1 在左闭区间查找
            right = mid - 1
        } else if (nums[mid] < target) { // nums[mid] 中间索引 小于 target 时  mid + 1 
            // 每次循环时 +1 在右闭区间查找
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}
 // 左闭右开 写法
let search1 = function (nums, target) {
    let left = 0, right = nums.length, mid
    while (left < right) {
        // 位运算 + 防止大数溢出
        mid = left + ((right - left) >> 1)

        if (nums[mid] > target) {
            right = mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
}

let res = search([1, 2, 4, 5, 6, 7, 0], 7)
console.log(res);
