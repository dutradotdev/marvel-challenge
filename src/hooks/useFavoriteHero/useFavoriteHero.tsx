import { removeFavoriteHero, setFavoriteHero } from '@marvel/redux/FavoriteHero'
import { FavoriteHeroProps } from '@marvel/redux/FavoriteHero/reducer'
import { RootState } from '@marvel/redux/store'
import { useSelector, useDispatch } from 'react-redux'

const useFavoriteHero = () => {
  const { favoriteHeros } = useSelector((state: RootState) => state.favoriteHero)
  const dispatch = useDispatch()

  const handleFavoriteHeros = ({ id, name }: any) => {
    if ((favoriteHeros as FavoriteHeroProps)[id]) {
      dispatch(removeFavoriteHero(id))
    } else {
      dispatch(
        setFavoriteHero({
          id,
          name,
        })
      )
    }
  }

  const isFavoriteHero = (id: any): boolean => Boolean((favoriteHeros as FavoriteHeroProps)[id])

  return [handleFavoriteHeros, isFavoriteHero]
}

export default useFavoriteHero
