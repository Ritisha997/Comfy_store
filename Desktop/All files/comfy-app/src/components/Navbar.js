import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <section className='navbar-section'>
        <div className='div-navbar'>
            <div className='comfy'><h2>Logo</h2></div>
            <ul className='navbar'>
                <li><Link className='nav-links' to='/'>Home</Link></li>
                <li><Link className='nav-links' to='/Products'>Products</Link></li>
            </ul>
            <div className='bar'>
                <button className='btn'>=</button>
            </div>
        </div>
   </section>
  )
}

export default Navbar
