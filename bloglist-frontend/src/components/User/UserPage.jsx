import React from 'react'
import { UserList } from './UserList'
export const UserPage = ({ users }) => {
  return (
    <>
      <h1>USers</h1>
      <table>
        <tbody>
          <tr>
            <th>User</th>
            <th>Blogs</th>
          </tr>
          <UserList users={users} />
        </tbody>
      </table>
    </>
  )
}
