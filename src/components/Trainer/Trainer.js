import React from "react";
import "./Trainer.scss";
import red from "../../images/red.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imgUrl } from "../../common/constant";
import { releasePokemon } from "../../redux/pokemons/counterSlice";

const Trainer = () => {
	const acquired = useSelector((state) => state.counter.caught);
	const dispatch = useDispatch();
	let renderAcquired = "";
	if (!acquired || acquired.length === 0) {
		renderAcquired = (
			<Link to="/">
				<div>Go Catch Some Pokemon!</div>
			</Link>
		);
	} else {
		renderAcquired = acquired.map((pokemon, index) => {
			const { name, id } = pokemon;
			return (
				<div className="pokemon-caught-item" key={index}>
					<button
						className="pokemon-caught-item-release"
						onClick={() => {
							handleRelease(id);
						}}
					>
						Release!
					</button>
					<img src={imgUrl(id)} alt={name} />
					<div className="pokemon-caught-item-name">
						<span>{name}</span>
					</div>
				</div>
			);
		});
	}

	const handleRelease = (id) => {
		dispatch(releasePokemon(id));
	};

	return (
		<div>
			<div className="section-title">View Your Pokemons!</div>
			<div className="section">
				<div className="section-left">
					<img src={red} alt="" />
				</div>
				<div className="section-right">
					<div className="pokemon-caught">{renderAcquired}</div>
				</div>
			</div>
			<Link to="/">
				<button>Back to List</button>
			</Link>
		</div>
	);
};

export default Trainer;
