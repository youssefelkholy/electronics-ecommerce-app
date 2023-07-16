import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import ProductDescription from '../../components/Special-Offers/ProductDescription';
import { specialOffers } from '../../data/special-offers';
import { addItemToCart, handleAlert } from '../../redux/apiCalls/cartApiCall';
import "./specialOffers.css";



const SpecialOffer = () => {
    const { id } = useParams();
    const product = specialOffers.find((p) => p.id === +id);
    const { images, title, price, discount, rating, reviews } = product;
    const [imgIndex, setImgIndex] = useState(0)
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const finalPrice = price - (discount * price) / 100;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // add to cart handler
    const addToCartHandler = () => {
        dispatch(addItemToCart({
            id: id,
            quantity: qty,
            price: price,
            title: title,
            image: images[0],
        }));
        handleAlert("success", "تم إضافة المنتج بنجاح");
    }
    return (
        <>
        <div className='special-offer-page'>
            <div className="img-wrapper">
                <img src={images[imgIndex]} alt="" className='special-offer-img' />
                <div className="special-offer-page-select-img">
                    {images.map((source,idx) =>
                        <img onClick={()=>setImgIndex(idx)} key={idx} src={source} alt="" className='select-img' />
                    )}
                </div>
            </div>
            <div className="special-offer-page-info">
                <h3 className='special-title'>{title}</h3>
                <div className="special-rating">
                    <Rating rating={rating} reviews={reviews} />
                </div>
                <div className="special-offer-price">
                    <b className='special-offer-price-item'>${price}</b>
                    <b className='special-offer-final-price-item'>
                        ${finalPrice}
                    </b>
                </div>
                <div className="special-offer-add-to-cart">
                    <div>الكمية</div>
                    <input value={qty} onChange={(e)=> setQty(e.target.value)} type="number" min={1} max={10} autoFocus />
                    <button onClick={addToCartHandler} className='add-to-cart'>إضافة إلي سلة التسوق</button>
                </div>
            </div>
        </div>
        <ProductDescription/>
        </>
    )
}

export default SpecialOffer
