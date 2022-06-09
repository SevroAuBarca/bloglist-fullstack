export const useField = (setState) => {
  const onChange = (e) => {
    const { name, value } = e.currentTarget
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const onChangeOnce = (e) => {
    const { name, value } = e.currentTarget
    setState({
      [name]: value
    })
  }

  return {
    onChange,
    onChangeOnce
  }
}
