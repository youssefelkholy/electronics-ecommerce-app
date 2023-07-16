import React from 'react';

const ProductFilterBox = ({ filterItem, setFilterItem }) => {
    
    // GET INPUT ID 
    const onChangeHandler = (e) => {
        setFilterItem(e.target.id);
    }

    return (
        <div className='product-filter'>
            <div className="form-group">
                <input value={filterItem} onChange={onChangeHandler} type="radio" name='filter' id='all' />
                <label htmlFor="all">بدون فلتر</label>
            </div>
            <div className="form-group">
                <input value={filterItem} onChange={onChangeHandler} type="radio" name='filter' id='labtop' />
                <label htmlFor="labtop">لابتوب</label>
            </div>
            <div className="form-group">
                <input value={filterItem} onChange={onChangeHandler} type="radio" name='filter' id='mobile' />
                <label htmlFor="mobile">جوال</label>
            </div>
        </div>
    )
}

export default ProductFilterBox
