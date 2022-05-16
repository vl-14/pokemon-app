import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../common/api/request";

export const fetchAsyncPokemons = createAsyncThunk(
	"pokemons/fetchAsyncPokemons",
	async () => {
		const res = await request.get("pokemon?limit=151").catch((err) => {
			console.log("Error: ", err);
		});
		return res.data.results;
	}
);

export const fetchAsyncPokemonDetail = createAsyncThunk(
	"pokemons/fetchAsyncPokemonDetail",
	async (name) => {
		const res = await request.get(`pokemon/${name}`).catch((err) => {
			console.log("Error: ", err);
		});
        return res.data;
	}
);

const initialState = {
	pokemons: [],
    selectedPokemon: {}
};

export const pokeSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		addPokemons: (state, { payload }) => {
			state.pokemons = payload;
		},
        selectPokemon: (state, {payload}) => {
            state.selectedPokemon = payload;
        }
	},
    extraReducers: {
        [fetchAsyncPokemons.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncPokemons.fulfilled]: (state, {payload}) => {
            console.log('completed');
            return {...state, pokemons: payload};
        },
        [fetchAsyncPokemons.rejected]: () => {
            console.log('rejected');
        },
        [fetchAsyncPokemonDetail.fulfilled]: (state, {payload}) => {
            console.log('completed');
            return {selectedPokemon: payload};
        }
    }
});

export const { addPokemons, selectPokemon } = pokeSlice.actions;
export const getAllPokemons = (state) => state.pokemons.pokemons;
export const getPokemonDetail = (state) => state.pokemons.selectedPokemon;
export default pokeSlice.reducer;
