import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.css'

const Button = () => {
  return (
    <div>
         <NavLink  to ="/contact" className='btn-hire' >Hire Me</NavLink> 
      
    </div>
  )
}

export default Button
