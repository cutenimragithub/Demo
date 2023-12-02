import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Navbar = () => {
  return (
   <nav>
    <NavLink to="/">
        <img src='images/logo.png' alt='logo' className='logo'/>
    </NavLink>
    <div className='menuIcon'>
        <ul className='navbar-list'>
            <li>
                <NavLink className='navlink' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='navlink' to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className='navlink' to='/services'>Services</NavLink>
            </li>
            <li>
                <NavLink className='navlink' to='/contact'>Contact</NavLink>
            </li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
