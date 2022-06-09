import { getByUsername } from '../services/users'

const initState = { username: '', name: '' }

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.data
    case 'DEL_USER':
      return { ...initState }
    default:
      return state
  }
}

export const setUser = (username) => {
  return async (dispatch) => {
    const user = await getByUsername(username)
    dispatch({
      type: 'SET_USER',
      data: {
        username: user.username,
        name: user.name
      }
    })
  }
}

export const delUser = () => {
  return (dispatch) => {
    dispatch({
      type: 'DEL_USER'
    })
  }
}

export default userReducer
