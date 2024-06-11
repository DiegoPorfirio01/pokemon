
import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  types: string[],
  typePokemons: string[],
  filterType: string[],
  pagination: number
}

const initialState: InitialState = {
  types: [],
  typePokemons: [],
  filterType: [],
  pagination: 12
}

export const typesSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.types = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload
    },
    setTypePokemons: (state, action) => {
      state.typePokemons = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    }, 
  }
})

export const { setType, setTypePokemons, setFilterType, setPagination } = typesSlice.actions
export const typesReducer = typesSlice.reducer;
