import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const HeroSection = () => {
  return (
    <div>
        <div className='container grid grid-two-column'>
            <div className='section-hero-data'>
                <p className='hero-top-data' >This is me</p>
                <h1 className='Hero-heading'> Nimra Website</h1>
                <p className='hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Recusandae deleniti, molestias odit minus impedit explicabo cumque facilis. Blanditiis, nemo temporibus.</p>
                     <Button/>
                   
            </div>
            <div className='section-hero-image'>
                <picture>
                <img src='/images/hero.svg'/>
                </picture>
                

            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
