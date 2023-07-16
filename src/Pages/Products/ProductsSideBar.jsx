import React from 'react'
import ProductFilterBox from './ProductFilterBox'
import ProductSortBox from './ProductSortBox'

const ProductsSideBar = ({ filterItem, setFilterItem, sortItem, setSortItem, products })=> {
    return (
        <div className='products-sideBar'>
            <div className="sideBar-item">
                <h4 className='product-sideBar-title'>فلتر حسب السلعة</h4>
                <ProductFilterBox filterItem={filterItem} setFilterItem={setFilterItem} />
            </div>
            <div className="sideBar-item">
                <h4 className='product-sideBar-title'>ترتيب حسب السعر</h4>
                <ProductSortBox sortItem={sortItem} setSortItem={setSortItem} />
            </div>
        </div>
    )
}

export default ProductsSideBar
