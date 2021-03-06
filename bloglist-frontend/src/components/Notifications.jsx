import React from 'react'
import { useSelector } from 'react-redux'
export const Notifications = () => {
  const notification = useSelector((state) => state.notifications)
  console.log(notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notification !== '') {
    return <div style={style}>{notification}</div>
  }
  return null
}
