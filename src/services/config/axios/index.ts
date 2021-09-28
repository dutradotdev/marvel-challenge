import axios from 'axios'
import MD5 from 'crypto-js/md5'

axios.defaults.baseURL = 'https://gateway.marvel.com:443/'

const axiosClient = axios.create({
  baseURL: 'https://gateway.marvel.com:443/',
})

axiosClient.interceptors.request.use((config) => {
  config.params = config.params || {}
  const ts = new Date().getTime()
  const publicKey = '44f7f13a055446072f48b9eec4aab845'
  const privateKey = '32ab53e9376588f56055cb021257d2e6adf5f811'
  config.params.ts = ts
  config.params.apikey = publicKey
  config.params.hash = MD5(ts + privateKey + publicKey).toString()
  return config
})

export default axiosClient
