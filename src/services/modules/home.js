import hyRequst from '@/services'
export function goodHomePrice() {
    return hyRequst.get({
        url: '/home/goodprice',
    })
}
export function getHomeHighScoreData() {
    return hyRequst.get({
        url: '/home/highscore',
    })
}
export function getDiscounteDInfo() {
    return hyRequst.get({
        url: '/home/discount',
    })
}