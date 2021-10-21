import { configureStore } from "@reduxjs/toolkit"

//*Import posts
import postsReducer from "../features/posts/postsSlice"

//*Import Users
import usersReducer from "../features/users/userSlice"

//* Import Notifications
import notificationReducer from "../features/notifications/notificationSlice"

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notification: notificationReducer
  }
})
