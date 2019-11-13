import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Global, css } from '@emotion/core'
import store from '../redux/store'
import NavBar from './NavBar'
import WelcomeBody from './WelcomeBody.js'
import FormBody from './FormBody'
import withAuthorization from './withAuthorization'
import Products from './Products'

function App() {
  return (
    <Provider store={store}>
      <Global
        styles={css`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
        `}
      />
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={WelcomeBody} />
          <Route path="/subscribe" component={FormBody} />
          <Route path="/products" component={withAuthorization(Products)} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
