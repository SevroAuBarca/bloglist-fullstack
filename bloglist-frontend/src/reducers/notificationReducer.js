let clear

export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    if (!clear) {
      await dispatch(showMessage(message))
      clear = setTimeout(() => dispatch(hideMessage()), seconds * 100)
    } else {
      clear = clearTimeout(clear)
      await dispatch(showMessage(message))
      clear = setTimeout(() => dispatch(hideMessage()), seconds * 100)
    }
  }
}

const showMessage = (message) => {
  return { type: 'SHOW', data: message }
}

const hideMessage = () => ({ type: 'HIDE', data: '' })

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SHOW':
      state = `${action.data}`
      return state
    case 'HIDE':
      state = action.data
      return state
    default:
      return state
  }
}

export default notificationReducer
