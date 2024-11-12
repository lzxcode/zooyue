import { configureStore } from "@reduxjs/toolkit";
import homeReduce from "./modules/home";
import entireStore from "./modules/entire/index.js";
import userStore from "./modules/user";
export const store = configureStore({
    reducer: {
        home: homeReduce,
        entire: entireStore,
        user: userStore,
    },
})