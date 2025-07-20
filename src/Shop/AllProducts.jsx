import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/Best_Whey.webp'
import Movingtext from '../Movingtext'
const AllProducts = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default AllProducts
