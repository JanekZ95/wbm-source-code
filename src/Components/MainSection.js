import React from "react";
import "./MainSection.css";
import "../App.css";
import { Route, useHistory } from "react-router-dom";
import Search from "./Pages/Search";

function MainSection() {
	const history = useHistory();

	const searchClick = () => {
		history.push("/Search");
	};

	return (
		<div className="main-container">
			<video src="/watch-best-movie/video/video-2.mp4" autoPlay loop muted />
			<h1>WATCH BEST MOVIE</h1>
			<p>What are you waiting for?</p>
			<div className="main-btns">
				<Route path="/Search" component={Search} />
				<button onClick={searchClick} className="search-btn">
					GET STARTED
				</button>
			</div>
		</div>
	);
}

export default MainSection;
