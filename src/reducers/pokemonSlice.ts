import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pokemon: {}
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.pokemon = action.payload 
    }
  }
})

export const { setPokemon } = pokemonSlice.actions
export const pokemonReducer = pokemonSlice.reducer