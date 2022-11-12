/**
 * 姓名脱敏
 */
function handleName(name) {
    let arr = Array.from(name)
    let result = ''
    if (arr.length === 2) {
        result = arr[0] + '*'
    } else if (arr.length > 2) {
        for (let i = 1; i < arr.length - 1; i++) {
            arr[i] = '*'
        }
        result = arr.join("")
    } else {
        return name
    }
    return result
}
/**
 * 电话脱敏
 */
function handlePhone(phone) {
    return phone.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2")
}

/**
 * 邮箱脱敏
 */
function handleEmail(email) {
    return email.replace(/^(.{0,3}).*@(.*)$/, "$1***@$2")
}

/**
 * 身份证脱敏
 */

function handleIdCard(id) {
    return id.replace(/^(.{4})(?:\d+)(.{4})$/, "$1**********$2");
}