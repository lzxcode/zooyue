import * as constants from "./constants"
import { getEntireRoomList } from "@/services/modules/entire.js"
export const createAction = {
    [constants.CHANGE_CURRENT_PAGE]: (payload) => ({ type: constants.CHANGE_CURRENT_PAGE, payload }),
    [constants.CHANGE_ROOM_LIST]: (payload) => ({ type: constants.CHANGE_ROOM_LIST, payload }),
    [constants.CHANGE_TOTAL_COUNT]: (payload) => ({ type: constants.CHANGE_TOTAL_COUNT, payload }),
}
export const fetchEntireRoomList = () => {
    return (dispatch, getState) => {
        getEntireRoomList(getState().entire.currentPage * 20 ).then(res => {
            dispatch(createAction[constants.CHANGE_ROOM_LIST](res.list))
            dispatch(createAction[constants.CHANGE_TOTAL_COUNT](res.totalCount))
        })
    }
}