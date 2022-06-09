import axios from 'axios'
const baseUrl = '/api/users'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getByUsername = async (username) => {
  const response = await axios.get(`${baseUrl}/${username}`)
  return response.data
}

export const createUser = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
