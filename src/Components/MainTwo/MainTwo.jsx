import React from 'react'
import imgTwo from "../assets/imgTwo.jpg"
import './MainTwo.css'

const MainTwo = () => {
  return (
    <div className='divMainTwo'>
        <div className='MainTwo'>
            
            <div><img className='img3' src={imgTwo} alt="" /></div>
            <div>
                <div className='text4'>Why are we doing this?</div>
                <div className='text5'>
                Our planet is at a critical turning point. Environmental degradation, <br /> fueled by unsustainable practices and neglect, has reached <br /> alarming levels. At Ecologia Problems, we believe in the power of <br /> collective action to reverse this trend. We are driven by the desire <br /> to preserve Earth’s natural beauty and biodiversity, ensuring that <br /> future generations inherit a thriving, sustainable planet. Our goal <br /> is to educate, inspire, and mobilize communities to take tangible <br /> steps toward environmental restoration. By addressing urgent <br /> issues like climate change, deforestation, and pollution, we aim <br /> to create a healthier world where humanity and nature coexist in <br /> harmony. Together, we can be the change our planet desperately <br /> needs.
                </div>
                <br /><br />
            </div>
        </div>
    </div>
  )
}

export default MainTwo