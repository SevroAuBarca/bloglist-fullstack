import React from 'react'
import { LoginForm } from './LoginForm'
export const LoginPage = ({ User, setOpenedLogin, setOpenedRegister }) => {
  return (
    <>
      <LoginForm
        userData={User.userData}
        setUserData={User.setUserData}
        handleLogin={User.handleLogin}
        setOpenedLogin={setOpenedLogin}
        setOpenedRegister={setOpenedRegister}
      />
    </>
  )
}
