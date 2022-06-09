import { useState } from 'react'
import { registerUser } from '../reducers/RegisterReducer'
import { showNotification } from '@mantine/notifications'

export const useRegister = (dispatch, setOpenedRegister) => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  })
  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      dispatch(registerUser(userData))
      setUserData({
        email: '',
        name: '',
        username: '',
        password: ''
      })
      setOpenedRegister(false)
      showNotification({
        title: 'Registration complete!',
        message: 'Your account was created sucesfully!! 🤥'
      })
    } catch (exception) {
      showNotification({
        title: 'Registration failed',
        message: 'Something went wrong!. Please, try again 🤥'
      })
    }
  }

  return { handleSignUp, userData, setUserData }
}
