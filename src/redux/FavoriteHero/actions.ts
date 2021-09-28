import { HeroProps } from '@marvel/common'

const prefix = '@marvel/FavoriteHero'

export const SET_FAVORITE_HERO = `${prefix}/SET_FAVORITE_HERO`
export const REMOVE_FAVORITE_HERO = `${prefix}/REMOVE_FAVORITE_HERO`

export const setFavoriteHero = (hero: any) => ({
  type: SET_FAVORITE_HERO,
  payload: hero,
})

export const removeFavoriteHero = (id: number) => ({
  type: REMOVE_FAVORITE_HERO,
  payload: id,
})
