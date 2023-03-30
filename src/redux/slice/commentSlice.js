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
        addNestedReply: (state, { payload }) => {
            const { parentId, data } = payload

            console.log({ parentId, data }, state.commentsObj[parentId])
            state.commentsObj[parentId].replies.push(data)
        }
        ,
        updateLocalStorageComments: (state) => {
            console.log("here")
            const commentsArr = []


            for (let i = 0, len = state.commentsArr.length; i < len; i++) {
                const id = state.commentsArr[i]
                const data = state.commentsObj[id]
                commentsArr.push(data)
            }


            localStorage.setItem("comments", JSON.stringify(commentsArr))
        }
        ,
        deleteComment: (state, { payload }) => {
            console.log({ payload })
            const filteredArr = state.commentsArr.filter((id) => id !== payload)

            console.log({ filteredArr })

            state.commentsArr = filteredArr
        }
        ,
        deleteCommentReply: (state, { payload }) => {
            const { parentId, replyId } = payload

            console.log({ parentId, replyId })

            const filteredReplies = state.commentsObj[parentId].replies.filter((data) => data.id !== replyId)
            state.commentsObj[parentId].replies = filteredReplies

            console.log({ filteredReplies })

        },
        editComment: (state, { payload }) => {
            const { id, data } = payload
            state.commentsObj[id] = { ...state.commentsObj[id], ...data }
        },
        editNestedComment: (state, { payload }) => {
            const { parentId, childId, data } = payload


            const replies = state.commentsObj[parentId].replies

            for (let i = 0, len = replies.length; i < len; i++) {
                const replyData = replies[i]

                if (replyData.id === childId) {
                    state.commentsObj[parentId].replies[i].content = data.content

                    return
                }
            }
        }
    }
})

export const { setCurrentUser, setComments, addNewComment, addReply, updateLocalStorageComments, deleteComment, deleteCommentReply, addNestedReply, editComment, editNestedComment } = commentSlice.actions