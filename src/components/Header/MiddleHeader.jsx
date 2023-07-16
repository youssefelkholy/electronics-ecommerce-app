import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const MiddleHeader = () => {
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <div className="middle-header">
            <div className="middle-header-search">
                <input type="search" placeholder='أي منتج تبحث عنه؟' />
                <button type='submit' className='search-btn'>إبحث</button>
            </div>
            <div onClick={()=>navigate("/cart")} className="middle-header-shoping-cart">
                سلـــة التســـوق
                <BsCart3 className='cart-icon' />
                {cartItems.length > 0 && (
                    <span className='cart-notification'>{cartItems.length}</span>
                )}
                
            </div>
        </div>
    )
}

export default MiddleHeader