import { loginUser, logOut } from '../reducers/loginReducer'
import { useState } from 'react'
import { showNotification } from '@mantine/notifications'

export const useLogin = (dispatch, setOpenedLogin) => {
  const [userData, setUserData] = useState({ username: '', password: '' })
  const [user, setUser] = useState(null)
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      dispatch(loginUser(userData))
      const nameAux = userData.username
      setUserData({ username: '', password: '' })
      setOpenedLogin(false)
      showNotification({
        title: 'Login complete!',
        message: `Welcome ${nameAux}`,
        color: 'green'
      })
    } catch (exception) {
      showNotification({
        title: 'Login Failed!',
        message: 'Something went wrong, please try again',
        color: 'red'
      })
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logOut())
    localStorage.removeItem('loggedBlogAppUser')

    setUser(null)
    showNotification({
      title: 'Goodbye!!',
      message: 'Hope we see you soon!',
      color: 'green'
    })
  }

  return { handleLogin, handleLogout, userData, setUserData, user, setUser }
}
