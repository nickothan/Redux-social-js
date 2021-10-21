import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectAllUsers } from "../userSlice"

export const UserList = () => {
  const users = useSelector(selectAllUsers)

  const renderedUsers = users.map((users) => (
    <li key={users.id}>
      <Link to={`/users/${users?.id}`}>{users?.name}</Link>
    </li>
  ))

  return (
    <section>
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  )
}

export default UserList
