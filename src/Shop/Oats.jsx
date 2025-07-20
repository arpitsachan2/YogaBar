import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/Homepage_desktop_1.webp'
import Movingtext from '../Movingtext'
const Oats = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default Oats
