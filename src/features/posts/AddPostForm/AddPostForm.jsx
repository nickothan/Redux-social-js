import { useState } from "react"
//* Redux
import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"

import { postAdded } from "../postsSlice"

export const AddPostForm = () => {
  //* Estados iniciales
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [userId, setUserid] = useState("")

  const dispatch = useDispatch()

  const users = useSelector((state) => state.users)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorCanged = (e) => setUserid(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))

      setTitle("")
      setContent("")
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" valur={userId} onChange={onAuthorCanged}>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <input
          type="text"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
