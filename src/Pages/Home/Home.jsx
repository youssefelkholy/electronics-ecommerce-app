import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../components/Banner/Banner'
import Brands from '../../components/Brands/Brands'
import Category from '../../components/Category/Category'
import Heading from '../../components/Heading/Heading'
import Slider from '../../components/Slider/Slider'
import SpecialOffers from '../../components/Special-Offers/SpecialOffers'
import { fetchProducts } from '../../redux/apiCalls/productApiCall'

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state)=> state.product);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    

    const labtopProducts = products.filter((el) => el.isLaptop === true);
    const mobileProducts = products.filter((el) => el.isLaptop === false);
    return (
        <Fragment>
            <Banner />
            <Category />
            <SpecialOffers />
            <Heading title="أحدث أجهزة اللابتوبات المحمولة" />
            <Slider data={labtopProducts} />
            <Heading title="أحدث أجهزة الهواتف المحمولة" />
            <Slider data={mobileProducts} />
            <Heading title="أفضل الماركات العالمية" />
            <Brands />
        </Fragment>
    )
}

export default Home
