import axios from '../config/axios'

const getWorld = async (endpoint) => {
  const data = await axios.get(endpoint)
  return data
}

export default getWorld
