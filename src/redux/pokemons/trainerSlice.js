import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	acquired: []
};

export const trainerSlice = createSlice({
	name: "acquired",
	initialState,
	reducers: {
		catchPokemon: (state, { payload }) => {
			state.acquired = [...state.acquired, payload];
		},
        releasePokemon: (state, {payload}) => {
            state.acquired.filter(pokemon => pokemon.id !== payload);
        }
	}
});

export const { catchPokemon, releasePokemon } = trainerSlice.actions;
export default trainerSlice.reducer;