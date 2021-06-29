import init from '@frankycty/react-auth'

const authConfig = {
  region: process.env.REACT_APP_AUTH_REGION,
  identityPoolId: process.env.REACT_APP_AUTH_IDENTITY_POOL_ID,
  userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID,
}

const cookieConfig = {
  domain: 'localhost',
  isDev: true,
}

const reactAuth = init(authConfig, cookieConfig)
export default reactAuth
