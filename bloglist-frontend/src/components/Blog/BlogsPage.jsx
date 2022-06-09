import React, { useState } from 'react'
/* import Blog from './Blog' */
import { FormBlog } from './FormBlog'
import { useBlogs } from '../../hooks/useBlogs'
import { BlogList } from './BlogList'
import { Container, Title, Modal, Group } from '@mantine/core'
import { ButtonToggle } from '../ButtonToggle'

export const BlogsPage = ({ blogs, dispatch }) => {
  const { addBlog, /* blogRef, */ setNewBlog, newBlog } = useBlogs(
    blogs,
    dispatch
  )
  /* const [visible, setVisible] = useState(true) */
  const [openedModal, setOpenedModal] = useState(false)

  return (
    <div>
      <Modal
        size={'xs'}
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title="Create Note"
      >
        <FormBlog newBlog={newBlog} setNewBlog={setNewBlog} addBlog={addBlog} />
      </Modal>
      <Container p={'sm'}>
        <Group position="apart">
          <Title>Blogs</Title>
          <ButtonToggle setOpenModal={setOpenedModal} />
        </Group>
      </Container>
      <Container>
        {/*        <Toggable
          visible={visible}
          setVisible={setVisible}
          ref={blogRef}
          data={'create new blog'}
        >
          <FormBlog
            newBlog={newBlog}
            setNewBlog={setNewBlog}
            addBlog={addBlog}
          />
        </Toggable> */}
        <BlogList blogs={blogs} />{' '}
      </Container>
      {/* {blogs
        .sort((a, b) => a.likes - b.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            likeBlog={likeBlog}
            removeBlog={removeBlog}
          />
        ))} */}
    </div>
  )
}
