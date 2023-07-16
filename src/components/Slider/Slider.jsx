import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';
import "./slider.css";

const Slider = ({ data }) => {
    const navigate = useNavigate()
    const [slideIndex, setSlideIndex] = useState(0);
    // handle products slider 
    function nextSlide(direction) {
        if (direction === "left") {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }
    return (
        <div className='slider-container'>
            <button onClick={()=>nextSlide("left")} className='arrow-left' disabled={data.length > 10 ? slideIndex === -data.length: slideIndex === -data.length}>
                <BsArrowLeft />
            </button>
            <div className="slider-wrapper">
                {data.map((prod) => {
                    return (
                        <div onClick={()=>navigate(`/products/${prod.id}`)} style={{transform: `translate(${slideIndex * -250}px)`}} className="slide" key={prod.id}>
                            <img src={prod.image} alt={prod.title} className='slide-img' />
                            <h3 className='slide-title'>{prod.title}</h3>
                            <Rating rating={prod.rating} reviews={prod.reviews} />
                            <div className="slide-price">{prod.price > 800 ? "سعــر خــاص " : `${prod.price}USD`}</div>
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>nextSlide("right")} className='arrow-right' disabled={slideIndex === 0}>
                <BsArrowRight />
            </button>
        </div>
    )
}

export default Slider
