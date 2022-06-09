import React, { useState } from 'react'
import { BlogsPage } from './components/Blog/BlogsPage'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import { UserPage } from './components/User/UserPage'
import { Notifications } from './components/Notifications'
import { UserProfile } from './components/User/UserProfile'
import { useBlogs } from './hooks/useBlogs'
import { LoginPage } from './components/Login/LoginPage'
import useApp from './hooks/useApp'
import Blog from './components/Blog/Blog'
import { AppShell, Header, Drawer } from '@mantine/core'
import { SignUpForm } from './components/SignUpPage/SignUpForm'

const App = () => {
  const [openedLogin, setOpenedLogin] = useState(false)
  const [openedRegister, setOpenedRegister] = useState(false)

  const { blogs, loginUser, users, dispatch, User, matchData, signUp } = useApp(
    setOpenedLogin,
    setOpenedRegister
  )
  const { likeBlog, removeBlog, comment, setComment, handleAddComment } =
    useBlogs(blogs, dispatch)
  const user = matchData('users', users)
  const blog = matchData('blogs', blogs)

  console.log(blog)
  return (
    <AppShell
      padding={0}
      header={
        <Header height={60} styles={{ backgroundColor: '#F2D1D1' }}>
          <Menu
            User={User}
            loginUser={loginUser}
            setOpenedLogin={setOpenedLogin}
            setOpenedRegister={setOpenedRegister}
          />
        </Header>
      }
      styles={{
        backgroundColor: '#C6DCE4'
      }}
    >
      <Drawer
        opened={openedLogin}
        onClose={() => setOpenedLogin(false)}
        title="Login"
        padding="xl"
        position="right"
      >
        <LoginPage
          User={User}
          setOpenedLogin={setOpenedLogin}
          setOpenedRegister={setOpenedRegister}
        />
      </Drawer>
      <Drawer
        opened={openedRegister}
        onClose={() => setOpenedRegister(false)}
        title="Register"
        padding="xl"
        position="right"
      >
        <SignUpForm
          signUp={signUp}
          setOpenedLogin={setOpenedLogin}
          setOpenedRegister={setOpenedRegister}
        />
      </Drawer>
      <Notifications />
      <Routes>
        <Route path="/users/:id" element={<UserProfile user={user} />} />
        <Route
          path="/blogs/:id"
          element={
            <Blog
              blog={blog}
              likeBlog={likeBlog}
              removeBlog={removeBlog}
              handleAddComment={handleAddComment}
              comment={comment}
              setComment={setComment}
            />
          }
        />
        <Route
          path="/"
          element={
            <BlogsPage
              blogs={[...blogs]}
              User={User}
              dispatch={dispatch}
              loginUser={loginUser}
            />
          }
        />
        <Route path="/users" element={<UserPage users={users} />} />
        <Route path="/login" element={<LoginPage User={User} />} />
      </Routes>
    </AppShell>
  )
}

export default App
