import React from 'react'
import './header.css'
import CTA from './CTA'
import SELF from '../../assets/self.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jong Han</h1>
        <h5 classname="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div className="self">
          <img src={SELF} alt="self" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header