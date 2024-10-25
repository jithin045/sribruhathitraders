import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ProductsOverview from './pages/Products/ProductsOverview';
import CustomizedProducts from './pages/Products/CustomizedProducts';
import Contact from './pages/Contact/Contact'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/productsoverview' element={<ProductsOverview />}></Route>
        <Route path='/customizedproducts' element={<CustomizedProducts />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
