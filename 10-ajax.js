// 封装ajax请求
const ajaxRequest = {
    get(url, fn) {
        const xhr = new XMLHttpRequest()
        // 第三个参数代表是否为异步请求
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                fn(xhr.responseText)
            }
        }
        xhr.send()
    },
    post(url, data, fn) {
        const xhr = new XMLHttpRequest()
        // 第三个参数代表是否为异步请求
        xhr.open('POST', url, true)
        // post 设置请求头
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                fn(xhr.responseText)
            }
        }
        xhr.send(data)
    }
}