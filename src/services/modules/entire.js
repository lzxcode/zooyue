import hyRequst from '@/services'
export function getEntireRoomList(offSet = 0, size = 20) {
    return hyRequst.get({
        url: '/entire/list',
        params: {
            offSet,
            size

        }
    })
}