import { configureStore } from '@reduxjs/toolkit'
import { pokemonsReducer } from './reducers/pokemonsSlice'
import { typesReducer } from './reducers/typesSlice'
import { pokemonReducer } from './reducers/pokemonSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    pokemon: pokemonReducer,
    types: typesReducer,
  }
})