import React from 'react'
import banner from "../assets/WHEY_1_1200x.webp"
import Nav from '../Components/Nav'
import Movingtext from '../Movingtext'



const WheyProtein = () => {
  return (
    <div>
      <Nav/>
      <img className='w-[100vw]' src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default WheyProtein
