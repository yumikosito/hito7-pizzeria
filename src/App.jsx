import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import RegisterPage from './components/Form/RegisterPage'
import LoginPage from './components/Form/LoginPage'
import Navbar from './components/Navbar/Navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Pizza from './components/Cards/Pizza'
import Cart from './components/Cart/Cart'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import {Routes, Route} from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { PizzaContext } from './context/PizzaContext'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <div>
      <CartProvider><UserProvider>
        <Navbar/>
        <Routes>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/pizzas/:id' element={<Pizza/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
       </UserProvider>
      </CartProvider>


     <Footer/>
    </div>

  )
}

export default App
