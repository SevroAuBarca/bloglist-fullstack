import React from 'react'
import { TextInput } from '@mantine/core'
import { useField } from '../../hooks/useField'
import { Button, Text, Anchor, Group } from '@mantine/core'
export const SignUpForm = ({ signUp, setOpenedLogin, setOpenedRegister }) => {
  const user = useField(signUp.setUserData)
  const changeToSignUp = () => {
    setOpenedLogin(true)
    setOpenedRegister(false)
  }
  return (
    <form onSubmit={signUp.handleSignUp}>
      <Group direction={'column'}>
        <TextInput
          type="text"
          value={signUp.userData.email}
          label="Email"
          placeholder="Email"
          name="email"
          onChange={user.onChange}
          required
        />
        <TextInput
          type="text"
          value={signUp.userData.name}
          label="Name"
          placeholder="Name"
          name="name"
          onChange={user.onChange}
          required
        />
        <TextInput
          type="text"
          value={signUp.userData.username}
          label="Username"
          placeholder="Username"
          name="username"
          onChange={user.onChange}
          required
        />
        <TextInput
          type="password"
          value={signUp.userData.password}
          name="password"
          label="Password"
          placeholder="Password"
          onChange={user.onChange}
          required
        />

        <Button type="submit">Sign Up</Button>
        <Text>
          Do you have a account? <Anchor onClick={changeToSignUp}>Login</Anchor>
        </Text>
      </Group>
    </form>
  )
}
