import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  type: string[],
  typePokemons: string[],
  filterType: string[],
  pagination: number
}

const initialState: InitialState = {
  type: [],
  typePokemons: [],
  filterType: [],
  pagination: 12
}

export const typesSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload
    },
    setTypePokemons: (state, action) => {
      state.typePokemons = action.payload;
    },
    resetPagination: (state) => {
      state.pagination = 12;
    }, 
    setPagination: (state) => {
      state.pagination += 12; 
    }, 
  }
})


export const { setType, setTypePokemons, setFilterType, setPagination, resetPagination} = typesSlice.actions
export const typesReducer = typesSlice.reducer;
