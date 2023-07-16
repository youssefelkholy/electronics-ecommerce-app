import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import SingleProduct from './Pages/Single-Product/Single-Product'
import SpecialOffer from './Pages/Special-Offer/SpecialOffer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/special-offer/:id' element={<SpecialOffer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
