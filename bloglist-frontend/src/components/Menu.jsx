import React from 'react'
import { Link } from 'react-router-dom'
import { UserLayout } from './User/UserLayout'
import { Group, Anchor, Text, Container } from '@mantine/core'
import { useHover } from '@mantine/hooks'
export const Menu = ({
  User,
  loginUser,
  setOpenedLogin,
  setOpenedRegister
}) => {
  const { hovered: hoverBlogs, ref: refBlogs } = useHover()
  const { hovered: hoverUsers, ref: refUsers } = useHover()
  const { hovered: hoverLogin, ref: refLogin } = useHover()
  const { hovered: hoverRegister, ref: refRegister } = useHover()

  return (
    <>
      <Group
        position="apart"
        grow={true}
        noWrap={false}
        style={{ padding: 15, backgroundColor: '#C6DCE4', borderRadius: 5 }}
      >
        <Text>XD</Text>
        <Container fluid={false} size={100}>
          <Group position="right">
            <Anchor
              ref={refBlogs}
              underline={false}
              transform={'uppercase'}
              style={{
                backgroundColor: hoverBlogs ? '#DAEAF1' : '#C6DCE4',
                padding: 5,
                color: hoverBlogs ? 'black' : 'black'
              }}
              component={Link}
              to="/"
            >
              Blogs
            </Anchor>
            <Anchor
              transform={'uppercase'}
              style={{
                backgroundColor: hoverUsers ? '#DAEAF1' : '#C6DCE4',
                padding: 5,
                color: hoverUsers ? 'black' : 'black'
              }}
              underline={false}
              component={Link}
              to="/users"
              ref={refUsers}
            >
              Users
            </Anchor>
            {loginUser.username === '' ? (
              <>
                <Anchor
                  transform={'uppercase'}
                  style={{
                    backgroundColor: hoverLogin ? '#DAEAF1' : '#C6DCE4',
                    padding: 5,
                    color: hoverLogin ? 'black' : 'black'
                  }}
                  underline={false}
                  href={'#'}
                  ref={refLogin}
                  onClick={() => setOpenedLogin(true)}
                >
                  Login
                </Anchor>
                <Anchor
                  transform={'uppercase'}
                  style={{
                    backgroundColor: hoverRegister ? '#DAEAF1' : '#C6DCE4',
                    padding: 5,
                    color: hoverRegister ? 'black' : 'black'
                  }}
                  underline={false}
                  href={'#'}
                  ref={refRegister}
                  onClick={() => setOpenedRegister(true)}
                >
                  Sign-up
                </Anchor>
              </>
            ) : (
              <UserLayout handleLogout={User.handleLogout} user={loginUser} />
            )}
          </Group>
        </Container>
      </Group>
    </>
  )
}
