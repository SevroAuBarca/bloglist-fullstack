import React, { useImperativeHandle } from 'react'

export const Toggable = React.forwardRef(
  ({ visible, setVisible, children, data }, ref) => {
    const isVisible = { display: visible ? 'none' : '' }
    const toggleVisibility = () => {
      setVisible(!visible)
    }
    useImperativeHandle(ref, () => {
      return {
        toggleVisibility
      }
    })
    return (
      <div>
        <div style={isVisible}>{children}</div>
        <button onClick={toggleVisibility}>{!visible ? 'Cancel' : data}</button>
      </div>
    )
  }
)

Toggable.displayName = 'Togglable'
