import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ThemeProvider, breakpoints } from 'lib/styled'
import Router from './router'

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
