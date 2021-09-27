import { useEffect, useState } from 'react'
import { getCharacter } from '@marvel/services'
import orderByField from '@marvel/utils'

const useGetPeopleWithPagination = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [hasPreviousPage, setHasPreviousPage] = useState(false)

  useEffect(() => {
    getPeople()
  }, [currentPage])

  const getPeople = async () => {
    try {
      setLoading(true)

      const { data: {
        data
      } } = await getCharacter(currentPage)
      console.tron.log(data)
      setHasNextPage(!!data?.next)
      setHasPreviousPage(!!data?.previous)

      setPeople(data?.results)
      return data
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const nextPage = () => {
    if (!hasNextPage) {
      return
    }
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const previousPage = () => {
    if (!hasPreviousPage) {
      return
    }

    setCurrentPage((currentPage) => currentPage - 1)
  }

  return [
    { people, loading, error },
    getPeople,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
    currentPage,
  ]
}

export default useGetPeopleWithPagination
