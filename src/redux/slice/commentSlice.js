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

            updateLocalStorageComments(state)
        },
        updateLocalStorageComments: (state, { payload }) => {
            console.log("here")
            const commentsArr = []


            for (let i = 0, len = state.commentsArr.length; i < len; i++) {
                const id = state.commentsArr[i]
                const data = state.commentsObj[id]
                commentsArr.push(data)
            }

            console.log({ commentsArr })

            localStorage.setItem("comments", JSON.stringify(commentsArr))
        }
    }
})

export const { setCurrentUser, setComments, addNewComment, addReply, updateLocalStorageComments } = commentSlice.actions