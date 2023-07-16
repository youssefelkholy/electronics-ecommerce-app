import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import "./rating.css";

const Rating = ({rating, reviews}) => {
    return (
        <div className="rating">
            {rating >= 5 ? <BsStarFill className="icon" /> : rating >= 4.5 ? <BsStarHalf className="icon" /> : <BsStar className="icon" />}
            {rating >= 4 ? <BsStarFill className="icon" /> : rating >= 3.5 ? <BsStarHalf className="icon" /> : <BsStar className="icon" />}
            {rating >= 3 ? <BsStarFill className="icon" /> : rating >= 2.5 ? <BsStarHalf className="icon" /> : <BsStar className="icon" />}
            {rating >= 2 ? <BsStarFill className="icon" /> : rating >= 1.5 ? <BsStarHalf className="icon" /> : <BsStar className="icon" />}
            {rating >= 1 ? <BsStarFill className="icon" /> : rating >= 0.5 ? <BsStarHalf className="icon" /> : <BsStar className="icon" />}
            <p className="desc">({reviews} تقييمات)</p>

        </div>
    )
}

export default Rating
