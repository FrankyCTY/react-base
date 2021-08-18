import init from '@frankycty/react-auth'

const authConfig = {
  region: process.env.REACT_APP_AUTH_REGION,
  identityPoolId: process.env.REACT_APP_AUTH_IDENTITY_POOL_ID,
  userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID,
  redirectUrl: process.env.REACT_APP_URL,
  authPageUrl: `${process.env.REACT_APP_URL}auth`,
}

const cookieConfig = {
  domain: process.env.REACT_APP_DOMAIN,
  isDev: false,
}

const auth = init(authConfig, cookieConfig)
export default auth
