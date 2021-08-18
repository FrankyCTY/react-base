import axios from 'axios'
import auth from 'auth'
import { isNilOrEmpty } from '@frankycty/rm-extra'
import moment from 'moment'

const { authCookie, authUtils, mapSessionToAuthCookies } = auth

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

  protectedHttpClient.interceptors.request.use(async function (config) {
    let accessToken = authCookie.getAccessToken()
    let idToken = authCookie.getIdToken()

    const accessTokenExpiryDate = authCookie.getAccessTokenExpiryDate()
    const accessTokenHasExpired = moment().isAfter(moment.unix(accessTokenExpiryDate))

    if (isNilOrEmpty(accessToken) || accessTokenHasExpired) {
      const session = await authUtils.getCurrentSession()

      const authCookiesSessions = mapSessionToAuthCookies(session)
      authCookie.setAuthSessionCookie(authCookiesSessions?.authSession)
      authCookie.setAuthIdTokenCookie(authCookiesSessions?.idToken)

      accessToken = authCookie.getAccessToken()
      idToken = authCookie.getIdToken()
    }

    config.headers.common['Authorization'] = `Bearer ${accessToken}`
    config.headers.common['id-token'] = idToken
    return config
  })

  return protectedHttpClient
}

export { getBaseHttpClient, getProtectedHttpClient }
