import React from 'react'
import { useField } from '../../hooks/useField'
import { Group, TextInput, Button } from '@mantine/core'
export const FormBlog = ({ newBlog, setNewBlog, addBlog }) => {
  const blog = useField(setNewBlog)

  return (
    <div>
      <form onSubmit={addBlog}>
        <Group direction="column" grow>
          <TextInput
            label="Title"
            placeholder="Title"
            value={newBlog.title}
            onChange={blog.onChange}
            name="title"
          />
          <TextInput
            label="Author"
            placeholder="Author"
            value={newBlog.author}
            onChange={blog.onChange}
            name="author"
          />
          <TextInput
            label="URL"
            placeholder="URL"
            value={newBlog.url}
            onChange={blog.onChange}
            name="url"
          />
          <Button type="submit">SAVE</Button>
        </Group>
      </form>
    </div>
  )
}
