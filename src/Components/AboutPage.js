import React from "react";
import "./AboutPage.css";

function AboutPage() {
	return (
		<section className="content-container">
			<video src="/watch-best-movie/video/video-2.mp4" autoPlay loop muted />
			<div className="content-info">
				<h1 className="info">ABOUT</h1>
				<p>
					Don't waste time for endless searching of a good movie. Get back to
					our HOME page and press "Get Started". In the result, you will get top
					5 movies of category you picked. Take a look, check informations about
					movies. Or just watch a trailer by pressing movie card you are
					interested in. Have fun!
				</p>
			</div>
			<div className="row">
				<div className="idea-container">
					<h2>IDEA</h2>
					<img src="/watch-best-movie/images/Idea.jpg" />
					<p>
						Crazy times, simply ideas. People wasting to much time for searching
						trough thousands of movies. We wanted to make searching much more
						easier.
					</p>
				</div>
				<div className="idea-container">
					<h2>CREATOR</h2>
					<img src="/watch-best-movie/images/creator.jpg" />
					<p>
						My name is John and im enying to spend some of my free time with
						good movies. I decided to make here library of the best movies i
						ever seen.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
