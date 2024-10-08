// IMPORTS ==============================================//
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// STORE ==============================================//
export const store = configureStore({
    reducer: {
        user: userReducer
    }
})
// EXPORTS ==============================================//