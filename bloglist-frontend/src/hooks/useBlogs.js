import { useState, useRef } from 'react'
import { setNotification } from '../reducers/notificationReducer'
import {
  addBlogs,
  addComments,
  delBlog,
  likeBlogs
} from '../reducers/blogsReducer'

export const useBlogs = (blogs, dispatch) => {
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const [comment, setComment] = useState({ comment: '' })
  const blogRef = useRef()

  const addBlog = async (event) => {
    event.preventDefault()
    blogRef.current.toggleVisibility()
    /*    const blogObject = {
        ...newBlog
      } */

    try {
      /* const returnedBlog = await create(blogObject) */
      /* setBlogs(blogs.concat(returnedBlog)) */
      dispatch(addBlogs(newBlog))
      dispatch(setNotification(`Blog added: ${newBlog.title}`, 30))
      setNewBlog({ title: '', author: '', url: '' })
    } catch (error) {
      alert('error, note need more than 3 characters')
    }
  }

  const likeBlog = async (id) => {
    const blog = blogs.find((n) => n.id === id)

    try {
      /* const returnedBlog = await update(id, blog)
        console.log(returnedBlog) */
      dispatch(likeBlogs(id, blog))
      dispatch(setNotification(`You like: ${blog.title}`, 30))
      /*  setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog))) */
    } catch (error) {
      alert(`the blog '${blog.title}' was already deleted from server`)
      /* setBlogs(blogs.filter((n) => n.id !== id)) */
    }
  }

  const removeBlog = async (id) => {
    const blog = blogs.find((n) => n.id === id)

    try {
      if (window.confirm('Seguro que quiere eliminarlo?')) {
        dispatch(delBlog(id))
        dispatch(setNotification(`Blog deleted: ${blog.title}`, 40))
        /*         const returnedBlogs = await remove(id)
         */
        /* setBlogs(returnedBlogs) */
      }
    } catch (error) {
      alert(`the blog '${blog.title}' was already deleted from server`)
    }
  }

  const handleAddComment = (e, id) => {
    e.preventDefault()
    dispatch(addComments(id, comment))
    setComment('')
  }

  return {
    addBlog,
    likeBlog,
    removeBlog,
    blogRef,
    setNewBlog,
    newBlog,
    comment,
    setComment,
    handleAddComment
  }
}
