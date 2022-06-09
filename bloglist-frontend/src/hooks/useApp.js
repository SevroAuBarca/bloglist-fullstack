import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../services/blogs'
import { useLogin } from './useLogin'
import { initBlogs } from '../reducers/blogsReducer'
import { setUser } from '../reducers/userReducer'
import { initUsers } from '../reducers/usersReducer'
import { useMatch } from 'react-router-dom'
import { useRegister } from './useRegister'

const useApp = (setOpenedLogin, setOpenedRegister) => {
  const blogs = useSelector((state) => state.blogs)
  const loginUser = useSelector((state) => state.user)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const User = useLogin(dispatch, setOpenedLogin)
  const signUp = useRegister(dispatch, setOpenedRegister)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      dispatch(setUser(user.username))
      setToken(user.token)
    }
    dispatch(initBlogs())
    dispatch(initUsers())
  }, [dispatch])

  const matchData = (url, collection) => {
    const match = useMatch(`/${url}/:id`)
    const data = match
      ? collection.find((collection) => collection.id === match.params.id)
      : null
    return data
  }

  return { blogs, loginUser, users, dispatch, User, matchData, signUp }
}

export default useApp
