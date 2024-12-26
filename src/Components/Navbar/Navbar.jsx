import React from 'react'
import '../Navbar/Navbar.css'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='divNavbar'>
        <div className="Navbar">
            <div className='Container'>
                <div><img className='img1' src={Logo} alt="" /></div>
                <div className='divtext1'><a className='text1' href="/">Ecologia <br /> Problems</a></div>
            </div>
            <div className='Container2'>
                <div className='diva1'><a href="/" className="a1">Home</a></div>
                <div className='diva1'><a href="/" className="a1">About-us</a></div>
                <div className='diva1'><a href="/" className="a1">Support-us</a></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar