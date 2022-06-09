import { useNavigate } from 'react-router-dom'

export const useHistory = () => {
  const history = useNavigate()

  return history
}
