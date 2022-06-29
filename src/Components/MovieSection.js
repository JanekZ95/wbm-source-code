import React, { useEffect, useState } from "react";
import "../Components/MovieSection.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import movies from "./MovieData";

export default function MovieSection() {
	const [movie, setMovie] = useState(movies);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = movie.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, movie]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<>
			<div className="category-main-container">
				<video src="/watch-best-movie/video/video-2.mp4" autoPlay loop muted />
				<section className="head-title">
					<h1 className="info">CATEGORIES</h1>
				</section>
				<div className="movie-container"></div>
				<section className="content-video-section">
					<div className="main-section">
						{movies.map((movie, movieIndex) => {
							const { id, image, name } = movie;
							let position = "nextSlide";
							if (movieIndex === index) {
								position = "activeSlide";
							}
							if (
								movieIndex === index - 1 ||
								(index === 0) & (movieIndex === movie.length - 1)
							) {
								position = "lastSlide";
							}
							return (
								<article className={position} key={id}>
									<img src={image} className="movie-img" alt={name} />
                  <h2>{name}</h2>
								</article>
							);
						})}
						<button className="prev" onClick={() => setIndex(index - 1)}>
							<FiChevronLeft />
						</button>
						<button className="next" onClick={() => setIndex(index + 1)}>
							<FiChevronRight />
						</button>
					</div>
				</section>
			</div>
		</>
	);
}
