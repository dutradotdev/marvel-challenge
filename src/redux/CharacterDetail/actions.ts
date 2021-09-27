const prefix = '@marvel/CharacterDetail'
export const SELECTED_HERO = `${prefix}/SELECTED_HERO`

export const setSelectedHero = (hero) => ({
    type: SELECTED_HERO,
    payload: hero
})
