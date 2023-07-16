import React from 'react';

const ProductSortBox = ({sortItem, setSortItem}) => {
    const onChangeHandler = (e) => {
        setSortItem(e.target.id);
    }

    return (
        <div className='product-sort'>
            <div className="form-group">
                <input onChange={onChangeHandler} value={sortItem} type="radio" name='sort' id='all' />
                <label htmlFor="all">بدون ترتيب</label>
            </div>
            <div className="form-group">
                <input onChange={onChangeHandler} value={sortItem} type="radio" name='sort' id='low' />
                <label htmlFor="low">من الأقل للأعلى</label>
            </div>
            <div className="form-group">
                <input onChange={onChangeHandler} value={sortItem} type="radio" name='sort' id='high' />
                <label htmlFor="high">من الأعلى للأقل</label>
            </div>
        </div>
    )
}

export default ProductSortBox
