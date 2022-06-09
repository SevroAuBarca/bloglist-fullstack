import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './reducers/store'
import { BrowserRouter as Router } from 'react-router-dom'
import { NotificationsProvider } from '@mantine/notifications'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
