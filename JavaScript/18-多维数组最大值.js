//  在一个大的多维数组中找出 每个小数组的最大值

// 在一个大的多维数组中 找出每个小数组的做大数

function fnArr(arr) {

    let newArr = []
    arr.forEach((item, index) => {
        newArr.push(Math.max(...item))
    });
    return newArr
}

console.log(fnArr([
    [5, 1, 3, 4],
    [12, 23, 56, 43],
    [25, 56, 45, 75, 64],
    [1001, 2003, 2113, 3542]
]));