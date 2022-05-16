import React, { useEffect } from "react";
import "./Pokemon.scss";
import { useDispatch, useSelector } from "react-redux";
import {
	getPokemonDetail,
	fetchAsyncPokemonDetail,
} from "../../redux/pokemons/pokeSlice";
import { Link, useParams } from "react-router-dom";

const Pokemon = () => {
	const { name } = useParams("name");
	const pokemonDetail = useSelector(getPokemonDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAsyncPokemonDetail(name));
	}, [name, dispatch]);

	let isLoading = <div>...Loading</div>;
	let renderDetail = "";

	if (Object.keys(pokemonDetail).length !== 0) {
		const { sprites, height, weight } = pokemonDetail;
		const { back_default, front_default } = sprites;
		renderDetail = (
			<div className="section-left">
				<div className="pokemon-title">{name}</div>
				<div className="pokemon-sprite">
					<img src={back_default} alt={`${name}_back`} />
					<img src={front_default} alt={`${name}_front`} />
				</div>
				<div className="pokemon-info">
					<div>
						<span>Height</span>
						<span>{height}</span>
					</div>
					<div>
						<span>Weight</span>
						<span>{weight}</span>
					</div>
				</div>
				<div className="pokemon-catch">
					<button>Catch This?</button>
					<button>View Pocket</button>
					<Link to="/">
						<button>Back to List</button>
					</Link>
				</div>
			</div>
		);
	} else {
		renderDetail = isLoading;
	}

	return <div className="pokemon-section">{renderDetail}</div>;
};

export default Pokemon;
