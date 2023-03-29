import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    commentsArr: [],
    commentsObj: {}
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
            // state.comments = payload
            const idArr = []

            payload.forEach((data) => {
                idArr.push(data.id)

                state.commentsObj[data.id] = data
            })

            state.commentsArr = idArr
        }
        ,
        addNewComment: (state, { payload }) => {
            console.log(payload)

            state.commentsArr.push(payload.id)
            state.commentsObj[payload.id] = payload
        }
        ,
        addReply: (state, { payload }) => {
            const { id, data } = payload


            console.log(id, data)

            state.commentsObj[id].replies.push(data)
        }
    }
})

export const { setCurrentUser, setComments, addNewComment, addReply } = commentSlice.actions