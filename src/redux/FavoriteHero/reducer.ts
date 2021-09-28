import { HeroProps } from '@marvel/common'
import { REMOVE_FAVORITE_HERO, SET_FAVORITE_HERO } from '@marvel/redux/FavoriteHero'

const initialState = {
  favoriteHeros: {},
}

export type FavoriteHeroProps = {
  [key: number]: {
    id: number
    name: string
  }
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FAVORITE_HERO:
      return {
        ...state,
        favoriteHeros: {
          ...state.favoriteHeros,
          [action.payload.id]: {
            name: action.payload.name,
          },
        },
      }
    case REMOVE_FAVORITE_HERO:
      delete state.favoriteHeros[action.payload]
      return {
        ...state,
      }
    default:
      return state
  }
}
