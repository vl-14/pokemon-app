import React from "react";
import { getImgUrl } from "../../common/constant";
import { Link } from "react-router-dom";
import "./Pokecard.scss";

const Pokecard = ({ data }) => {
	const { name, url } = data;
	return (
		<Link to={`/pokemon/${name}`}>
			<div className="card-item">
				<div className="card-inner">
					<div className="card-top">
						<img src={getImgUrl(url)} alt={name} />
					</div>
					<div className="card-bottom">
						<div className="card-info">
							<h4 className="card-info-name">{name}</h4>

							<p>Click to View!</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Pokecard;
