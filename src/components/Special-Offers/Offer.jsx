import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';

const Offer = ({ offer }) => {
    const { firstImage, secondImage, title, price, discount, rating, reviews, id } = offer;
    const [imgSrc, setImgSrc] = useState(firstImage);
    const finalPrice = price - (discount * price) / 100;
    const navigate = useNavigate();
    return (
        <div className='offer'>
            <div className="offer-img-wrapper">
                <img
                    onMouseEnter={() => setImgSrc(secondImage)}
                    onMouseLeave={()=>setImgSrc(firstImage)}
                    src={imgSrc}
                    alt={title}
                    className='offer-img' />
            </div>
            <div className="offer-info">
                <h5 className='offer-title'>{title}</h5>
                <div className="offer-rating">
                    <Rating rating={rating} reviews={reviews} />
                </div>
                <div className="offer-price">
                    <b className='offer-price-item'>${price}</b>
                    <b className='offer-final-price-item'>
                        ${finalPrice}
                    </b>
                </div>
                <div onClick={()=>navigate(`/special-offer/${id}`)} className="offer-see-more">أحصل علي عروض أكثر....</div>
                <div className="offer-discount">خصم{discount}%</div>
            </div>
        </div>
    )
}

export default Offer
