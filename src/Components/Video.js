import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const Video = ({ items }) => {
	return (
		<div className="section-center">
			{items.map((videoItem) => {
				const { id, title, category, rating, img, year, desc, href } =
					videoItem;
				const onClick = () => console.log(`clicked ${id}`);
				return (
					<a href={href} target="_blank" rel="open" className="video-item">
						<img src={img} alt={title} className="photo" />
						<button className="play-button">
							<AiFillPlayCircle className="play-circle" />
						</button>
						<div className="item-info">
							<h4>{title}</h4>
							<h3>{year}</h3>
							<h2>{category}</h2>
							<h5>{rating}</h5>
							<p>{desc}</p>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default Video;
