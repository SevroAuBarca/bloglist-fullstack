import React from 'react'
import { Avatar, Menu, Button } from '@mantine/core'

export const UserLayout = ({ user, handleLogout }) => {
  return (
    <>
      <Menu control={<Avatar />}>
        <Menu.Label>
          {user.name.split(' ')[0]} ({user.username}) Loged-in!
        </Menu.Label>
        <Button color={'red'} onClick={handleLogout}>
          LogOut
        </Button>
      </Menu>
    </>
  )
}
