import React from 'react'
export const UserProfile = ({ user }) => {
  if (!user) {
    return null
  }
  return (
    <>
      <h1>{user.username}</h1>
      <h2>Blogs</h2>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </>
  )
}
