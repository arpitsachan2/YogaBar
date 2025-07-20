import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/yogababy-_Compressify.io_5838741e-b94c-478d-a29f-4a530f3fba09.webp'
import Movingtext from '../Movingtext'
const YogaBaby = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default YogaBaby
