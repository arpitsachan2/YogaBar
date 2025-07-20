import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/Homepage_desktop_2.webp'
import Movingtext from '../Movingtext'
const Muesli = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default Muesli
