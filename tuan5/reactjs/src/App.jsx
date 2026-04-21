import {Routes, Route} from "react-router-dom"
import './App.css'
import Contact from './components/Contact'
import About from "./components/About"
import Home from "./components/Home"
import {Link} from "react-router-dom"
import React from "react"
import NotFound from "./components/NotFound"
import Product from "./components/Product"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Orders from "./components/Orders"
import Settings from "./components/Settings"
import ProductDetail from "./components/ProductDetail"
import Checkout from "./components/Checkout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductDetail/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
      <nav>
        <Link to="/">Product Detail</Link>
      </nav>
    </>
  )
}

export default App
