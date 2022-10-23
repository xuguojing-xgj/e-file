// http://item.taobao.com/item.htm?a=1&b=2&c=3&d=&e=xxx&f

/**
 * 返回格式 
 * { 
 * a: '1'
 * ...
 * }
 */

function urlFn(url) {
    let urlObj = {}
    if (/\?/.test(url)) {
        let urlString = url.substring(url.indexOf('?') + 1)
        let urlArray = urlString.split('&')
        for (let i = 0, len = urlArray.length; i < len; i++) {
            let urlItem = urlArray[i]
            let item = urlItem.split('=')
            urlObj[item[0]] = item[1]
        }
        return urlObj
    }
    return null
}

let res = urlFn('http://item.taobao.com/item.htm?a=1&b=2&c=3&d=&e=xxx&f')
console.log(res)