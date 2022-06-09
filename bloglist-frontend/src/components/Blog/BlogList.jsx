import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mantine/core'
export const BlogList = ({ blogs }) => {
  return (
    <Grid>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </Grid>
  )
}
