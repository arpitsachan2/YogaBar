import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/Artboard_1_8.webp'
import Movingtext from '../Movingtext'
const Bars = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default Bars
