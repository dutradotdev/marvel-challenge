const prefix = '@marvel/CharacterDetail'
export const SELECTED_HERO = `${prefix}/SELECTED_HERO`

export const setSelectedHero = (hero: any) => ({
  type: SELECTED_HERO,
  payload: hero,
})
