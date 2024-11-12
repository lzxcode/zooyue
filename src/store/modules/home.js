import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goodHomePrice, getHomeHighScoreData, getDiscounteDInfo } from "../../services";

export const fetchGoodPriceInfo = createAsyncThunk("fetchGoodPriceInfo", (payload, { dispatch }) => {
    goodHomePrice().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreDataAction(res))
    })
    getDiscounteDInfo().then(res => {
        dispatch(changeDiscounteDInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreData: {},
        discounteDInfo: {},

    },
    reducers: {
        changeGoodPriceInfoAction(state, action) {
            state.goodPriceInfo = action.payload
        },
        changeHighScoreDataAction(state, action) {
            state.highScoreData = action.payload
        },
        changeDiscounteDInfoAction(state, action) {
            state.discounteDInfo = action.payload
        }
    },

})
export const { changeGoodPriceInfoAction, changeHighScoreDataAction, changeDiscounteDInfoAction } = homeSlice.actions;
const { reducer } = homeSlice;
export default reducer;