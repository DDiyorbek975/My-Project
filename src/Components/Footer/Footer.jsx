import React from 'react'
import '../Footer/Footer.css'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <div className='divFooter'>
        <div className="Footer">
            <div className='Container'>
                <div><img className='img1' src={Logo} alt="" /></div>
                <div className='divtext1'><a className='text1' href="/">Ecologia <br /> Problems</a></div>
            </div>
            <div className='Container2'>
                <div className='diva1'><a href="/" className="a2">Home</a></div>
                <div className='diva1'><a href="/" className="a2">About-us</a></div>
                <div className='diva1'><a href="/" className="a2">Support-us</a></div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Footer