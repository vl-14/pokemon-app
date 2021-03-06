import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Pokemon from "./components/Pokemon/Pokemon";
import NotFound from "./components/NotFound/NotFound";
import Trainer from "./components/Trainer/Trainer";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/trainer" element={<Trainer />}></Route>
						<Route exact path="/pokemon/:name" element={<Pokemon />}></Route>
						<Route element={<NotFound />}></Route>
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
