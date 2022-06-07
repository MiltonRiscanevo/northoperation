import React from 'react'
import Logo from '../images/northway.png'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" />
        <h1>North Operations</h1>
    </div>
  )
}

export default Header