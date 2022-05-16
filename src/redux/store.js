import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from './pokemons/pokeSlice';
import counterReducer from './pokemons/counterSlice';


export const store = configureStore({
    reducer: {
        pokemons: pokeReducer,
        counter: counterReducer
    },
})