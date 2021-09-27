/* global __DEV__ */
import React from 'react'
import { LogBox } from 'react-native'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import store from '@marvel/redux/store'
import Router from '@marvel/router'

if (__DEV__) {
  import('@marvel/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

// ignore warnings from react-native-avataaars
LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
