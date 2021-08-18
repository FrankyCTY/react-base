import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './app/store'
import { userService } from 'services'
import { Provider } from 'react-redux'
import Router from './router'

import auth from 'auth'

const { authEventHub } = auth

authEventHub.on('CustomAuthChannel', (data) => {
  if (data?.payload?.event === 'signUp') {
    const { authId, firstName, lastName } = data?.payload?.data
    // create user with the user service
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{ breakpoints }}>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
