// 实现promise
class Promise {
    constructor(executor) {
        this.value = '';
        this.reason = '';
        this.state = 'pending'
        this.successFunc = []
        this.failFunc = []
        let resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'complete';
                this.value = value
                this.successFunc.forEach(v => {
                    v()
                })
            }
        }
        let reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'falied';
                this.reason = reason
                this.failFunc.forEach(v => v())
            }
        }
        try {
            executor && executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onSuccess, onFail) {
        if (this.state === 'complete') {
            onSuccess && onSuccess(this.value)
        }
        if (this.state === 'falied') {
            onFail && onFail(this.reason)
        }
        if (this.state === 'pending') {
            this.successFunc.push(onSuccess)
            this.failFunc.push(onFail)
        }
    }
}

new Promise((resolve, reject) => {
    resolve('resolve')
}).then((res) => {
    console.log(res);
})