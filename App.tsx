/* global __DEV__ */
import React from 'react'
import { LogBox } from 'react-native'
import 'react-native-gesture-handler'
import Router from './src/router'

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

// ignore warnings from react-native-avataaars
LogBox.ignoreAllLogs()

const App = () => <Router />

export default App
