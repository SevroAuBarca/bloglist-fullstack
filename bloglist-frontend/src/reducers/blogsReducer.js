import { getAll, create, update, remove, addComment } from '../services/blogs'
import { initUsers } from './usersReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, action.data]
    case 'INIT_BLOGS':
      return [...action.data]
    case 'LIKE_BLOG':
      // eslint-disable-next-line no-case-declarations
      const id = action.data.id
      // eslint-disable-next-line no-case-declarations
      const changedBlog = {
        ...action.data
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedBlog
      )
    case 'DELETE_BLOG':
      return [...action.data]
    case 'ADD_COMMENT':
      return reuploadBlogs(state, action.data)
    default:
      return state
  }
}

const reuploadBlogs = (state, data) => {
  const id = data.id
  // eslint-disable-next-line no-case-declarations
  const changedBlog = {
    ...data
  }
  return state.map((anecdote) => (anecdote.id !== id ? anecdote : changedBlog))
}

export const initBlogs = () => {
  return async (dispatch) => {
    const blogs = await getAll()
    console.log(blogs)
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const addBlogs = (blog) => {
  return async (distpatch) => {
    const newBlog = await create(blog)
    distpatch({
      type: 'ADD_ANECDOTE',
      data: { ...newBlog }
    })
    distpatch(initBlogs())
    distpatch(initUsers())
  }
}

export const likeBlogs = (id, newObject) => {
  return async (dispatch) => {
    const blog = await update(id, newObject)
    dispatch({
      type: 'LIKE_BLOG',
      data: { ...blog }
    })
  }
}

export const delBlog = (id) => {
  return async (dispatch) => {
    const blogs = await remove(id)
    console.log(blogs)
    dispatch({
      type: 'DELETE_BLOG',
      data: [...blogs]
    })
  }
}

export const addComments = (id, comment) => {
  return async (dispatch) => {
    const commentAdded = await addComment(id, comment)
    dispatch({
      type: 'ADD_COMMENT',
      data: commentAdded
    })
  }
}

export default blogReducer
