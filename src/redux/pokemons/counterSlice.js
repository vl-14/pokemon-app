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
        state.caught = state.caught.filter((pokemon) => pokemon.id !== payload);
    },
  },
})

export const { catchPokemon, releasePokemon } = counterSlice.actions

export default counterSlice.reducer