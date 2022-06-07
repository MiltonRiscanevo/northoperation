import React from 'react'
import { Link} from 'react-router-dom'

import './navbar.css'


const Navbar = () => {
  return (
    <div className='navbar_container nav_responsive'>
          <Link to='/'><button className='buttons_navbar'>Pagina Principal</button></Link>  
          <Link to='/dashboard'><button className='buttons_navbar'>Dashboard</button></Link>
          <Link to='/trainings'><button className='buttons_navbar'>Herramientas Capacitaciones</button></Link>        
    </div>
  )
}

export default Navbar