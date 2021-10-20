import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { PostAuthor } from "../postAuthor"
import { TimeAgo } from "../TimeAgo/TimeAgo"
import ReactionButtons from "../ReactionButtons"

import { SelectAllPosts, fetchPosts } from "../postsSlice"

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(SelectAllPosts)

  const postStatus = useSelector((state) => state.posts.status)

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b?.date?.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => {
    console.log(" : posts : ", post?.title)
    return (
      <article className="post-excerpt" key={Math.random() * 100}>
        <h3>{post?.title}</h3>

        <div>
          <PostAuthor userId={post?.user} />
          <TimeAgo timestamp={post?.date} />
        </div>
        <p className="post-content">{post?.content.substring(0, 100)}</p>

        <ReactionButtons post={post} />
        <Link to={`/posts/${post?.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    )
  })

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList
