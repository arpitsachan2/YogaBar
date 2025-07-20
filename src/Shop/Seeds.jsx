import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/dry_fruits_seeds-_Compressify.io.webp'
import Movingtext from '../Movingtext'
const Seeds = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default Seeds
