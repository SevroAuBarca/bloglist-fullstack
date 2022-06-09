import React from 'react'
import { useField } from '../../hooks/useField'
import { TextInput, Button, Group, Text, Anchor } from '@mantine/core'

export const LoginForm = ({
  handleLogin,
  userData,
  setUserData,
  setOpenedLogin,
  setOpenedRegister
}) => {
  const user = useField(setUserData)
  const changeToSignUp = () => {
    setOpenedLogin(false)
    setOpenedRegister(true)
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <Group direction={'column'}>
          <TextInput
            type="text"
            value={userData.username}
            label="Username"
            placeholder="Username"
            name="username"
            onChange={user.onChange}
            required
          />

          <TextInput
            type="password"
            value={userData.password}
            name="password"
            label="Password"
            placeholder="Password"
            onChange={user.onChange}
            required
          />

          <Button type="submit">login</Button>
          <Text>
            Dont have a account?{' '}
            <Anchor onClick={changeToSignUp}>Sign Up</Anchor>
          </Text>
        </Group>
      </form>
    </>
  )
}
