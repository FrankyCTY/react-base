import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ThemeProvider, breakpoints } from 'lib/styled'
import Router from './router'

import auth from 'auth'

const { authContext } = auth

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <authContext.Authentication
        redirectUrl="http://localhost:3000/"
        authPageUrl="http://localhost:3000/auth/"
      >
        <ThemeProvider theme={{ breakpoints }}>
          <Router />
        </ThemeProvider>
      </authContext.Authentication>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
