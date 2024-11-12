import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dispatch } from "react-redux";

const userSlice = createSlice({
    name: 'home',
    initialState: {
        isLogin: false,
        userInfo: {},
        highScoreData: {},
        discounteDInfo: {},

    },
    reducers: {
        changeLoginState(state, action) {
            state.isLogin = action.payload
        },
        getUserInfo(state, action) {
            state.userInfo = action.payload
        }
    },

})
export const { userLogin, getUserInfo, changeLoginState } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;