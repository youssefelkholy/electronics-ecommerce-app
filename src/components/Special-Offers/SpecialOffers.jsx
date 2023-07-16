import React from 'react';
import { BsStopwatch } from "react-icons/bs";
import { specialOffers } from '../../data/special-offers';
import Offer from './Offer';
import "./specialOffers.css";

const SpecialOffers = () => {
    return (
        <div className='special-offers'>
            <h1 className='special-offers-title'>
                عروض وتخفيضات كبيره
                <span className='special-offers-icon-wrapper'>
                    <BsStopwatch className='watch' />لمدة 24 ساعة فقط
                </span>
            </h1>
            <div className="special-offers-wrapper">
                {specialOffers.map((offer)=><Offer key={offer.id} offer={offer} />)}
            </div>
        </div>
    )
}

export default SpecialOffers