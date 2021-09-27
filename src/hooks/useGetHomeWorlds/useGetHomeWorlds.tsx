import { useState } from 'react'
import { getWorld } from '@marvel/services'

const useGetHomeWorlds = () => {
  const [homeWorlds, setHomeWorlds] = useState({})
  const [loading, setLoading] = useState([])
  const [error, setError] = useState(false)

  const getHomeWorlds = async (characterList) => {
    try {
      const homeworlds = characterList.map((item) => item.homeworld)
      const uniqueHomeWorlds = Array.from(new Set(homeworlds))
      const homeWorldsData = await Promise.all(
        uniqueHomeWorlds.map(async (endpoint) => {
          const { data } = await getWorld(endpoint)

          return {
            [endpoint]: data?.name,
          }
        })
      )
      const reduced = homeWorldsData.reduce((acc, cur) => {
        acc[Object.keys(cur)[0]] = Object.values(cur)[0]
        return acc
      }, {})

      if (Object.keys(reduced).length > 0) {
        setHomeWorlds({ ...reduced })
      }
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return [{ homeWorlds, loading, error }, getHomeWorlds]
}

export default useGetHomeWorlds
