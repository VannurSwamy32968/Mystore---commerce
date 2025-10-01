import React from 'react'
import './App.css'
import StoreNavbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import CartPage from './Pages/CartPage/CartPage'
import Product from '../src/Pages/Product/Product'

const App = () => {
  return (
   <>
  <div style={{overflow:"hidden"}}>
 <StoreNavbar/>
   {/* <Home/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<Product/>}/>
    <Route path='/MyCart' element={<CartPage/>}/>
   </Routes>
   {/* <Product/> */}
  </div>
   </>
  )
}

export default App