import React, { useState } from "react";
import Video from "./Video";
import Categories from "./Categories";
import items from "./data";
import "./SearchCategory.css";

const allCategories = [...new Set(items.map((item) => item.category))];

function SearchCategory() {
	const [videoItems, setVideoItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === "all") {
			setVideoItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setVideoItems(newItems);
	};

	return (
		<>
			<main>
				<video src="/watch-best-movie/video/video-2.mp4" autoPlay loop muted />
				<section className="video-section">
					<div className="question-title">
						<h2>Pick a category</h2>
					</div>
					<Categories categories={categories} filterItems={filterItems} />
					<Video items={videoItems} />
				</section>
			</main>
		</>
	);
}

export default SearchCategory;
