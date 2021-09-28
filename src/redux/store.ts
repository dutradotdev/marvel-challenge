import { combineReducers, createStore } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer } from 'redux-persist'

import CharacterDetailStore from '@marvel/redux/CharacterDetail/reducer'
import FavoriteHero from '@marvel/redux/FavoriteHero/reducer'

const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
  blacklist: ['charactedDetail'],
}

const rootReducer = combineReducers({
  charactedDetail: CharacterDetailStore,
  favoriteHero: FavoriteHero,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }

export type RootState = ReturnType<typeof rootReducer>
