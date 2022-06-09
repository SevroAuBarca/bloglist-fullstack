import { createUser } from '../services/users'

const init = {
  data: {
    email: '',
    name: '',
    username: '',
    password: ''
  },
  status: 0
}

export const registerReducer = (state = { ...init }, action) => {
  switch (action.type) {
    case 'REGISTER':
      return action.data
    case 'INIT_STATE':
      return init
    default:
      return state
  }
}

export const registerUser = (credentials) => {
  return async (dispatch) => {
    try {
      const sign = await createUser(credentials)
      dispatch({ type: 'REGISTER', data: sign })
    } catch (error) {
      console.log(error)
    }
  }
}

export const initState = () => {
  return {
    type: 'INIT_STATE',
    data: init
  }
}
