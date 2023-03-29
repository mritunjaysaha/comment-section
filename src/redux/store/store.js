import { configureStore } from "@reduxjs/toolkit"
import { commentSlice } from "../slice/commentSlice"


export const store = configureStore({
    reducer: {
        comment: commentSlice.reducer
    }
})