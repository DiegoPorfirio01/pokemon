
import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  types: string[],
  filterTypes: string[],
  pagination: string
}

const initialState: InitialState = {
  types: [],
  filterTypes: [],
  pagination: ''
}

export const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setFilterTypes: (state, action) => {
      state.filterTypes = action.payload
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    } 
  }
})

export const { setTypes, setFilterTypes, setPagination } = typesSlice.actions
export const typesReducer = typesSlice.reducer;
