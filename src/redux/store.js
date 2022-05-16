import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from './pokemons/pokeSlice';
import trainerReducer from './pokemons/trainerSlice';


export const store = configureStore({
    reducer: {
        pokemons: pokeReducer,
        trainer: trainerReducer
    },
})