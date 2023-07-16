import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import ProductDescription from '../../components/Special-Offers/ProductDescription';
import Spinner from '../../components/Spinner/Spinner';
import { addItemToCart, handleAlert } from '../../redux/apiCalls/cartApiCall';
import { getProductById } from '../../redux/apiCalls/productApiCall';
import "../Special-Offer/specialOffers.css";



const SingleProduct = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, isLoading } = useSelector((state) => state.product);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        dispatch(getProductById(id));
        window.scrollTo(0, 0);
    }, [dispatch, id]);
    
    // add to cart handler
    const addToCartHandler = () => {
        dispatch(addItemToCart({
            id: product?.id,
            quantity: qty,
            price: product?.price,
            title: product?.title,
            image: product.image,
        }));
        handleAlert("success", "تم إضافة المنتج بنجاح");
    };

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    return (
        <>
        <div className='special-offer-page'>
            <div className="img-wrapper">
                <img src={product?.image} alt="" className='special-offer-img' />
            </div>
            <div className="special-offer-page-info">
                <h3 className='special-title'>{product?.title}</h3>
                <div className="special-rating">
                    <Rating rating={product?.rating} reviews={product?.reviews} />
                </div>
                <div className="special-offer-price">
                    <b className='special-offer-final-price-item'>${product?.price}</b>
                </div>
                <div className="special-offer-add-to-cart">
                    <div>الكمية</div>
                    <input value={qty} onChange={e=> setQty(e.target.value)} type="number" min={1} max={10} autoFocus />
                    <button onClick={addToCartHandler} className='add-to-cart'>إضافة إلي سلة التسوق</button>
                </div>
            </div>
        </div>
        <ProductDescription/>
        </>
    )
}

export default SingleProduct
