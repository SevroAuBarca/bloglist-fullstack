import { login } from '../services/login'
import { setToken } from '../services/blogs'
import { delUser, setUser } from './userReducer'

const init = { name: '', username: '', token: '' }

const loginReducer = (state = { ...init }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return init
    default:
      return state
  }
}

export const loginUser = (credentials) => {
  return async (dispatch) => {
    const log = await login(credentials)
    localStorage.setItem('loggedBlogAppUser', JSON.stringify(log))
    console.log(log)
    setToken(log.token)

    dispatch({
      type: 'LOGIN',
      data: log
    })
    dispatch(setUser(log.username))
  }
}

export const initState = (data) => {
  return {
    type: 'INIT_STATE',
    data
  }
}

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem('loggedBlogAppUser')

    dispatch({
      type: 'LOGOUT'
    })
    dispatch(delUser())
  }
}

export default loginReducer
