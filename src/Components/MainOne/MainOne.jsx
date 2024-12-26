import React from 'react'
import imgOne from "../assets/imgOne.jpg"
import './MainOne.css'

const MainOne = () => {
  return (
    <div className='divMainOne'>
        <div className='MainOne'>
            <div>
                <div className='text2'>Let's save nature</div>
                <div className='text3'>
                The environmental crisis is a growing threat to our planet, driven <br /> by human activities that degrade ecosystems and deplete natural <br /> resources. Climate change, caused by the burning of fossil fuels, <br /> leads to rising temperatures, extreme weather events, and <br /> disruptions to agriculture and wildlife. Deforestation continues <br /> to destroy vital habitats, contributing to the loss of biodiversity, <br /> while pollution from waste, chemicals, and plastics harms both <br /> ecosystems and human health. The overconsumption of <br /> resources accelerates habitat destruction and puts immense <br /> pressure on the environment. Immediate global action is <br /> needed to transition to renewable energy, reduce emissions, <br /> promote sustainable practices, and restore ecosystems, ensuring <br /> a livable planet for future generations.
                </div>
                <br /><br />
            </div>
            <div><img className='img2' src={imgOne} alt="" /></div>
        </div>
    </div>
  )
}

export default MainOne