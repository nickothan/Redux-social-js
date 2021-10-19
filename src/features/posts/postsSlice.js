import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: "1",
    title: "First Post",
    content: "Hello!",
    date: new Date().toISOString()
  },
  {
    id: "2",
    title: "Second Post",
    content: "More text.",
    date: new Date().toISOString()
  }
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, conntent } = action.payload

      const existingPost = state.find((post) => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = conntent
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
