import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/Cult_Banner_Web_1.webp'
import Movingtext from '../Movingtext'
const Protein = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default Protein
