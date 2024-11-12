import hyRequst from '@/services'
export function userLogin(data) {
    return hyRequst.post({
        url: '/user/login',
        data
    })
}

export function getUserInfo() {
    return hyRequst.get({
        url: '/user/getUserInfo',
    })
}