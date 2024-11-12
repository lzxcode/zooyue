import * as constants from "./constants"
const initialState = {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
};

function reduce(state = initialState, action) {
    switch (action.type) {
        case constants.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case constants.CHANGE_ROOM_LIST:
            return {
                ...state,
                roomList: action.payload,
            };
        case constants.CHANGE_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            };
        default:
    }

    return state
};

export default reduce;