import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'

import './App.css'


const App = () => {

  return (
    <div>
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/services" element ={<Services/>}/>
        <Route path="/contact" element ={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
    </div>
  )
  }

export default App

