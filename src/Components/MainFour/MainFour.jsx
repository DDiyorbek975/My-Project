import React from 'react'
import './MainFour.css'

const MainFour = () => {
  return (
    <div className='divMainFour'>
        <div className='MainFour'>
            <div>
                <div className='text9'>You can support us with a donation!</div>
                <div><input type="text" placeholder='Enter card number' className='input' /></div>
                <div><input type="text" placeholder='Enter amount' className='input'/></div>
                <div className='divbtn'><button className='btn'>Donate!</button></div>
            </div>
        </div>
    </div>
  )
}

export default MainFour