import axios from '@marvel/services/config/axios'

const getCharacter = async (page: number, limit = 20) => {
  const data = await axios.get(`/v1/public/characters?limit=${limit}&offset=${page * limit}`)
  return data
}

export default getCharacter
