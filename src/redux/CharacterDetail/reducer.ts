import { HeroProps } from '@marvel/common'
import { SELECTED_HERO } from '@marvel/redux/CharacterDetail'

import { toHttps } from '@marvel/utils'

const initialState = {
  selectedHero: {
    name: '',
    description: '',
    path: '',
    extension: '',
    url: '',
  },
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SELECTED_HERO:
      return {
        ...state,
        selectedHero: {
          ...action.payload,
          url: toHttps(`${action?.payload?.path}.${action?.payload?.extension}`),
        },
      }
    default:
      return state
  }
}
