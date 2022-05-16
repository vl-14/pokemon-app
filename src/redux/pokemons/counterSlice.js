import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  caught: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    catchPokemon: (state, { payload }) => {
        state.caught = [...state.caught, payload];
    },
    releasePokemon: (state, { payload }) => {
        state.caught.filter((pokemon) => pokemon !== payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { catchPokemon, releasePokemon } = counterSlice.actions

export default counterSlice.reducer