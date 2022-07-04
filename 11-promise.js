function get(_url, _params) {
    _params = _params || {}
    return new Promise((resolve, reject) => {
        axios.get(_url, { _params }).then((result) => {
            if (result.status === 200) {
                resolve(result.data)
            }
        }).catch((err) => {
            reject(err)
        });
    })
}

function post(_url, _params) {
    _params = _params || {}
    return new Promise((resolve, reject) => {
        axios.post(_url, { _params }).then((result) => {
            if (result.status === 200) {
                resolve(result.data)
            }
        }).catch((err) => {
            reject(err)
        });
    })
}