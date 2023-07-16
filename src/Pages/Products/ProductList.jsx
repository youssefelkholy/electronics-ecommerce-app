import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <div className='product-list'>
            {products.map((prod) => {
                return (
                    <ProductItem key={prod.id} prod={prod}/>
                )
            })}
        </div>
    )
}

export default ProductList
