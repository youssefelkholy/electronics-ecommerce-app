import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../components/Pagination/Pagination'
import { fetchProducts } from '../../redux/apiCalls/productApiCall'
import ProductList from './ProductList'
import ProductsSideBar from './ProductsSideBar'
import "./products.css"

const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    const [filterItem, setFilterItem] = useState("all");
    const [sortItem, setSortItem] = useState("low");

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    
    // filter products
    const filteredProducts = products.filter((product) =>
        filterItem === "labtop"
        ? product.isLaptop === true
        : filterItem === "mobile"
        ? product.isLaptop === false
        : product
    );
    
    // sort product
    const sortedProductList =
        sortItem === "low"
            // from cheapest to expensive
            ? filteredProducts.sort((a, b) => a.price - b.price)
            : sortItem === "high" 
            // from expensive to cheapest
            ? filteredProducts.sort((a,b)=>b.price - a.price)
            : filteredProducts.sort((a,b)=>a.title > b.title ? 1 : -1);

    // pagination client side server
    const PRODUCT_PER_PAGE = 3;
    const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);
    
    const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
    const finishIndex = currentPage * PRODUCT_PER_PAGE;
    const orderedProducts = sortedProductList.slice(startIndex, finishIndex);

    return (
        <>
            <div className='products'>
                <ProductsSideBar products={products} filterItem={filterItem} setFilterItem={setFilterItem} sortItem={sortItem} setSortItem={setSortItem}  />
                <ProductList products={orderedProducts} />
            </div>
            <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}

export default Products
