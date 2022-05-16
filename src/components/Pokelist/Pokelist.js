import React from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokelist.scss";

const Pokelist = ({list}) => {
	const pokemons = list;

	let renderPokemons = "";
	renderPokemons =
		pokemons && pokemons.length !== 0 ? (
			pokemons.map((poke, index) => {
				return <Pokecard key={index} data={poke}></Pokecard>;
			})
		) : (
			<div className="pokemon-error">
				<h1>No Pokemons!</h1>
			</div>
		);
	console.log("Poke", pokemons);

	return (
		<>
			<div className="pokemon-wrapper">
				<div className="pokemon-list">
					<h2>Pokemon</h2>
					<div className="pokemon-container">{renderPokemons}</div>
				</div>
			</div>
		</>
	);
};

export default Pokelist;
