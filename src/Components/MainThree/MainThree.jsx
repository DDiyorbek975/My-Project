import React from 'react'
import imgThree from "../assets/imgThree.jpg"
import imgFour from "../assets/imgFour.jpg"
import './MainThree.css'

const MainThree = () => {
  return (
    <div>
        <div className='divMainThree'>
        <div className='MainThree'>
            
            <div className='divimg4'><img className='img4' src={imgThree} alt="" /></div>
            <div>
                <div className='text6'>You can do it too!</div> <br />
                <div className='text7'>
                Small actions lead to big change. Start by reducing <br /> waste, conserving energy, and supporting eco <br />-friendly initiatives. Share your efforts to inspire <br /> others and help create a ripple effect. Together, we <br /> can make a real impact on protecting our planet!
                </div>
                <br /><br />
            </div>
        </div>
        <div className='MainThree'>
            
            <div className='divimg4'><img className='img4' src={imgFour} alt="" /></div>
            <div>
                <div className='text8'>Conclusion</div> <br />
                <div className='text7'>
                Protecting our planet is not just an option—it’s our <br /> responsibility. By taking small but meaningful steps, <br /> we can ensure a sustainable future for generations to <br /> come. Together, let’s act, inspire, and create a world <br /> where nature and humanity thrive in harmony.
                </div>
                <br /><br />
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default MainThree