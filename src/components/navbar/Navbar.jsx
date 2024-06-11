import React from 'react'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  
 
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container">
        <Link to={'/'}> <img src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-md-4" ><Link to={'/'} className='text-decoration-none text-black fw-bold'>Home</Link></li>
      <li className="nav-item "><Link to={'/shop'} className='text-decoration-none text-black fw-bold'>Shop</Link></li>
      <li className="nav-item mx-md-4 "><Link to={'/blog'} className='text-decoration-none text-black fw-bold '>Blog</Link></li>
      <li className="nav-item"><Link to={'/about'} className='text-decoration-none text-black fw-bold '>About</Link></li>
      <li className="nav-item mx-md-4"><Link to={'/contact'} className='text-decoration-none text-black fw-bold '>Contact</Link></li>
            </ul>
            <Link to={'/signup'} className = 'btn btn-warning mx-4 px-4 py-2 fw-bold signupbtn'  >Create Account</Link>
           <Link to={'/login'} className=' btn btn-outline-dark text-decoration-none fs-6   login'> Log in</Link>
          </div>
        </div>
      </nav>

    </>

  )
}

export default Navbar