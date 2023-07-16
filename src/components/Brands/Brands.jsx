import React from 'react';
import { brands } from '../../data/brands';
import "./brands.css";

const Brands = () => {
    return (
        <div className='brands-wrapper'>
            {brands.map((brand) => {
                return (
                    <div key={brand.id} className='brand'>
                        <img src={brand.image} alt="" className='brand-img' />
                    </div>
                );
            })}
        </div>
    )
}

export default Brands
