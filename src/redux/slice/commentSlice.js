import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    comments: []
}

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setCurrentUser: (state, { payload }) => {
            state.currentUser = payload
        }
        ,
        setComments: (state, { payload }) => {
            state.comments = payload
        }
    }
})

export const { setCurrentUser, setComments } = commentSlice.actions