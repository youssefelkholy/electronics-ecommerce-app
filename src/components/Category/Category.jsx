import React from 'react'
import { categories } from '../../data/category'
import "./category.css"

const Category = () => {
    return (
        <div className='categories'>
            {categories.map((cat) => {
                return (
                    <div key={cat.id} className="category-item">
                        <img src={cat.image} alt={cat.title} className='category-item-img' />
                        <b className='category-item-title'>{cat.title}</b>
                    </div>
                )
            })}
        </div>
    )
}

export default Category