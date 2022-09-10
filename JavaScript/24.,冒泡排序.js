/**
 * 
 */
let arr = [1, 90, 78, 34, 102, 3, 5, 56,]
function Bubbling(ArrNums) {
    let temp;
    for (let i = 0; i < ArrNums.length - 1; i++) {
        for (let j = 0; j < ArrNums.length - 1 - i; j++) {
            if (ArrNums[j] > ArrNums[j + 1]) {
                // 调换位置
                temp = ArrNums[j]
                ArrNums[j] = ArrNums[j + 1]
                ArrNums[j + 1] = temp
            }
        }
    }
    return ArrNums
}
let result = Bubbling(arr)
console.log(result);