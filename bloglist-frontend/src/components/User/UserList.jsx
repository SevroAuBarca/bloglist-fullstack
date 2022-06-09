import React from 'react'
import { Link } from 'react-router-dom'
export const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            <th>
              <Link to={`/users/${user.id}`}>{user.username}</Link>{' '}
            </th>
            <th>{user.blogs.length}</th>
          </tr>
        )
      })}
    </>
  )
}
