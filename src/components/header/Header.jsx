import React from 'react'
import Logo from '../images/northway.png'
const Header = () => {
  return (
    <div style={{display:'flex', justifyContent: 'space-around', margin:'20px'}}>
        <img src={Logo} alt="" />
        <h1>North Operations</h1>
    </div>
  )
}

export default Header