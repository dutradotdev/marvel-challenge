import { useEffect, useState } from 'react'
import { getCharacter } from '@marvel/services'

const useGetPeopleWithPagination = (): [
  any,
  () => any,
  () => any,
  () => any,
  boolean,
  boolean,
  number
] => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [hasNextPage, setHasNextPage] = useState(true)
  const [hasPreviousPage, setHasPreviousPage] = useState(false)

  useEffect(() => {
    getPeople()
  }, [currentPage])

  const getPeople = async () => {
    try {
      setLoading(true)

      const {
        data: { data },
      } = await getCharacter(currentPage)
      setHasNextPage(data?.total - data?.offset > 0)
      setHasPreviousPage(data?.offset > 0)

      setPeople(data?.results)
      return data
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const nextPage = (): void => {
    if (!hasNextPage) {
      return
    }
    setCurrentPage((currentPage) => currentPage + 1)
  }

  const previousPage = (): void => {
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
