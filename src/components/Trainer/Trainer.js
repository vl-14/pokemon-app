import React from "react";
import "./Trainer.scss";
import red from "../../images/red.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Trainer = () => {
	const acquired = useSelector(state => state.counter.caught);
	let renderAcquired = "";
	if (!acquired || acquired.length === 0) {
		renderAcquired = (
			<Link to="/">
				<div>Go Catch Some Pokemon!</div>
			</Link>
		);
	} else {
		renderAcquired = acquired.map((pokemon, index) => (
			<div className="pokemon-caught-item" key={index}>
				{/* <img src="" alt="" /> */}
				<div className="pokemon-caught-item-name">
					<span>Ivysaur</span>
				</div>
			</div>
		));
	}

	return (
		<div>
			<div className="section">
				<div className="section-left">
					<img src={red} alt="" />
				</div>
				<div className="section-right">
					<div className="pokemon-caught">{renderAcquired}</div>
				</div>
			</div>
		</div>
	);
};

export default Trainer;
