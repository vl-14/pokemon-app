import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllPokemons,
	fetchAsyncPokemons,
} from "../../redux/pokemons/pokeSlice";
import Pokelist from "../Pokelist/Pokelist";
import "./Home.scss";

const Home = () => {
	const pokemons = useSelector(getAllPokemons);
	const dispatch = useDispatch();
	useEffect(() => {
        dispatch(fetchAsyncPokemons());
	}, [dispatch]);

	return (
		<div>
			{pokemons && Object.keys(pokemons).length === 0 ? (
				<div>...Loading</div>
			) : (
				<Pokelist list={pokemons}></Pokelist>
			)}
		</div>
	);
};

export default Home;
