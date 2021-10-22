import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Navbar from "./components/Navbar"

//* Imports from Posts
import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"
import EditPostForm from "./features/posts/EditPostForm"
import SinglePostPage from "./features/posts/SinglePostPage"

//* Imports from Users
import UserList from "./features/users/UsersList"
import UserPage from "./features/users/UserPage"

//* Import from Notifications
import NotificationsList from "./features/notifications/NotificationsList"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <AddPostForm />
                <PostsList />
              </div>
            )}
          />
          <Route exact path="/notifications" component={NotificationsList} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
