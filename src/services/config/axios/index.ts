import axios from 'axios'
import MD5 from 'crypto-js/md5'
import { API_URL, API_PUBLIC_KEY, API_PRIVATE_KEY } from 'react-native-dotenv'

const axiosClient = axios.create({
  baseURL: API_URL,
})

axiosClient.interceptors.request.use((config) => {
  config.params = config.params || {}
  const ts = new Date().getTime()
  config.params.ts = ts
  config.params.apikey = API_PUBLIC_KEY
  config.params.hash = MD5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY).toString()
  return config
})

export default axiosClient
