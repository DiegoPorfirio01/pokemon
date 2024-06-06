
import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  pokemons: string[],
  filterPokemons: string[],
  pagination: string
}

const initialState: InitialState = {
  pokemons: [],
  filterPokemons: [],
  pagination: ''
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFilterPokemons: (state, action) => {
      state.filterPokemons = action.payload
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    } 
  }
})

export const { setPokemons, setFilterPokemons, setPagination } = pokemonsSlice.actions
export const pokemonsReducer = pokemonsSlice.reducer;
