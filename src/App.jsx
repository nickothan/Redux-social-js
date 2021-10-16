import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Navbar from "./components/Navbar"

import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"

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
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
