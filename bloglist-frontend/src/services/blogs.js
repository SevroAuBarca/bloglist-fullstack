import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

export const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const create = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)

  return response.data
}

export const addComment = async (id, comment) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, comment)
  return response.data
}

export const update = async (id, newObject) => {
  console.log(id)
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

export const remove = async (id) => {
  const config = {
    headers: { Authorization: token }
  }
  await axios.delete(`${baseUrl}/${id}`, config)
  const response = await getAll()
  return response
}
