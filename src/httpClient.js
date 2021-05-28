import axios from 'axios'
import reactAuth from '@frankycty/react-auth'

const { authCookie } = reactAuth

const getBaseHttpClient = (baseURL, config) =>
  axios.create({
    baseURL,
    headers: {
      'content-type': 'application/json',
    },
    ...config,
  })

const getProtectedHttpClient = (baseURL, config) => {
  const protectedHttpClient = getBaseHttpClient(baseURL, config)

  const accessToken = authCookie.getAccessToken()
  protectedHttpClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

  const idToken = authCookie.getIdToken()
  protectedHttpClient.defaults.headers.common['id-token'] = idToken

  return protectedHttpClient
}

export { getBaseHttpClient, getProtectedHttpClient }
