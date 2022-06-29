import React from "react";
import "./CategoryList.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ListItem from "./ListItem";
import { useRef, useState } from "react";

export default function CategoryList() {

    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x -65

        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${275 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-275 + distance}px)`
        }
    }

	return (
		<div className="list">
			<span className="listTitle">Continue to watch</span>
			<div className="wrapperList">
				<MdArrowBackIos className="sliderArrowLeft" onClick={() => handleClick('left')} />
				<div className="containerList" ref={listRef}>
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
				</div>
				<MdArrowForwardIos className="sliderArrowRight" onClick={() => handleClick('right')} />
			</div>
		</div>
	);
}
