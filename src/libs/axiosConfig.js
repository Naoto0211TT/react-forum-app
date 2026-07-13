import Axios, { isAxiosError } from 'axios'
import Cookies from 'js-cookie'

const baseURL = process.env.VITE_API_BASE_URL

export const axios = Axios.create({ baseURL })

axios.interceptors.request.use((request) => {
  const token = Cookies.get('auth-token')
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

axios.interceptors.response.use(
  (response) => {
    if (
      response.data &&
      (response.data.message === 'token has expired' ||
        response.data.message === 'Token has expired' ||
        response.data.message === 'Token not provided')
    ) {
      Cookies.remove('auth-token')
      window.location.href = '/login'
      return Promise.reject(response.data)
    }
    return response
  },
  (error) => {
    if (isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        Cookies.remove('auth-token')
        window.location.href = '/login'
      }
      return Promise.reject(error.response)
    }
    return Promise.reject(error)
  }
)
