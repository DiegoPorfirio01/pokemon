import { configureStore } from '@reduxjs/toolkit'
import { pokemonsReducer } from './reducers/pokemonsSlice'
import { typesReducer } from './reducers/typesSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    // pokemon: pokemonReducer,
    types: typesReducer,
  }
})