import React from 'react'
import Nav from '../Components/Nav'
import banner from "../assets/all_products_2ffa90f2-9f4d-43c6-aa3b-9e1db9f0874d.webp"
import Movingtext from '../Movingtext'
const Breakfast = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default Breakfast
