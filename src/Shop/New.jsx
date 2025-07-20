import React from 'react'
import Nav from '../Components/Nav'
import banner from '../assets/Plant_protein_Desktop.webp'
import Movingtext from '../Movingtext'
const New = () => {
  return (
    <div>
      <Nav/>
      <img src={banner} alt="" />
      <Movingtext/>
    </div>
  )
}

export default New
