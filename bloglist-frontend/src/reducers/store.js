import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './notificationReducer'
import blogReducer from './blogsReducer'
import loginReducer from './loginReducer'
import userReducer from './userReducer'
import usersReducer from './usersReducer'
/* import { configureStore } from '@reduxjs/toolkit'
 */
const reducer = combineReducers({
  blogs: blogReducer,
  notifications: notificationReducer,
  login: loginReducer,
  user: userReducer,
  users: usersReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

/* export default configureStore({
  reducer: {
    blogs: blogReducer,
    notifications: notificationReducer
  }
}) */
