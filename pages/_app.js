import React from 'react'
import App from 'next/app'
import withReduxStore from '../redux/with-redux-store'
import { Provider } from 'react-redux'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Provider store={reduxStore}>
      <Component {...pageProps}  />
      { <script src={`/js/smooth-scroll.min.js`}></script> }
      { <script src={`/js/main.js`}></script> }
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
