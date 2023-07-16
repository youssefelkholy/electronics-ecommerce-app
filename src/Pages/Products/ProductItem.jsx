import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rating from '../../components/Rating/Rating'

const ProductItem = ({prod}) => {
    const navigate = useNavigate()
    return (
            <div onClick={()=>navigate(`/products/${prod.id}`)} className="slide">
                <img src={prod.image} alt={prod.title} className='slide-img' />
                <h3 className='slide-title'>{prod.title}</h3>
                <Rating rating={prod.rating} reviews={prod.reviews} />
                <div className="slide-price">{prod.price > 800 ? "سعــر خــاص " : `${prod.price}USD`}</div>
            </div>
    )
}

export default ProductItem
