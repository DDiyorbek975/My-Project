import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import MainOne from './Components/MainOne/MainOne'
import MainTwo from './Components/MainTwo/MainTwo'
import MainThree from './Components/MainThree/MainThree'
import MainFour from './Components/MainFour/MainFour'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
       <Navbar />
      <MainOne />
      <MainTwo />
      <MainThree />
      <MainFour />
      <Footer />

    </div>
  )
}

export default App