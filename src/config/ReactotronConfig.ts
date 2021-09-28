import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

declare global {
  interface Console {
    tron: any
  }
}

const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage).configure().useReactNative().connect()

console.tron = tron
