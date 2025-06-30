import React from 'react'
import './Detail.css'
import Nav from './Nav'
import img1 from '../assets/Community_2.webp'
import img2 from '../assets/Community_3.webp'
import img3 from '../assets/Community_4.webp'
import img4 from '../assets/Community_5.webp'
import img5 from '../assets/Community_8.webp'
import img6 from '../assets/Community_10.webp'
import img7 from '../assets/Community_15.webp'
import img8 from '../assets/Community_18.webp'
import img9 from '../assets/Community_26.webp'
import fast from '../assets/Mask_group_1_9ba2ad85-10e6-4734-8722-a03fea93606b.webp'
import oats from '../assets/Mask_group_2_53c3b94d-46f8-4431-ad8e-caa0ea3396d5.avif'
import protein from '../assets/Mask_group_1.webp'


import Footer from './Footer'
import Footerimg from './Footerimg'
import pack6 from '../assets/files/pack_of_6.png'
const Detail = () => {
  return (
    <div id='qq'>
      <Nav />
      <div className='bg-[#F8F2E4]  h-[250px] flex items-center    ' >
        <div id="m1">
          <div class="co">
            <img id='imged' src={img1} alt="" />
            <img id='imged' src={img2} alt="" />
            <img id='imged' src={img3} alt="" />
            <img id='imged' src={img4} alt="" />
            <img id='imged' src={img5} alt="" />
            <img id='imged' src={img6} alt="" />
            <img id='imged' src={img7} alt="" />
            <img id='imged' src={img8} alt="" />
            <img id='imged' src={img9} alt="" />
            <img id='imged' src={img1} alt="" />
            <img id='imged' src={img2} alt="" />
            <img id='imged' src={img3} alt="" />
            <img id='imged' src={img4} alt="" />
            <img id='imged' src={img5} alt="" />
            <img id='imged' src={img6} alt="" />
            <img id='imged' src={img7} alt="" />
            <img id='imged' src={img8} alt="" />
            <img id='imged' src={img9} alt="" />
            <img id='imged' src={img1} alt="" />
            <img id='imged' src={img2} alt="" />
            <img id='imged' src={img3} alt="" />
            <img id='imged' src={img4} alt="" />
            <img id='imged' src={img5} alt="" />
            <img id='imged' src={img6} alt="" />
            <img id='imged' src={img7} alt="" />
            <img id='imged' src={img8} alt="" />
            <img id='imged' src={img9} alt="" />
            <img id='imged' src={img1} alt="" />
            <img id='imged' src={img2} alt="" />
            <img id='imged' src={img3} alt="" />
            <img id='imged' src={img4} alt="" />
            <img id='imged' src={img5} alt="" />
            <img id='imged' src={img6} alt="" />
            <img id='imged' src={img7} alt="" />
            <img id='imged' src={img8} alt="" />
            <img id='imged' src={img9} alt="" />
          </div>

        </div>
      </div>

      <div className='h-[33vw] ' >
        <h2 id='paytone' className='text-center text-[4vw] mt-[1vw] '>Explore all categories</h2>
        <div className='flex gap-[4vw] ml-[4vw] items-center h-[27vw] '>

          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14v  w] w-[14vw] ' src={pack6} alt="" />
            <h2 className='text-center text-[2vw]  font-bold'>New Launches & Offers</h2>
          </div>
          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14vw] w-[14vw] ' src={fast} alt="" />
            <h2 className='text-center text-[2vw]  font-bold'>Breakfast</h2>
          </div>
          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14vw] w-[14vw] ' src={oats} alt="" />
            <h2 className='text-center text-[2vw]  font-bold'>Oats & Quinoa</h2>
          </div>
          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14vw] w-[14vw] ' src={protein} alt="" />
            <h2 className='text-center text-[2vw]  font-bold'>Protein</h2>
          </div>
        </div>

      </div>

      <div className='bg-[#E33675] h-[20vw] w-[100vw] flex justify-center pt-[2vw] lea  ' >
        <h2 id='paytone' className='text-[#FFF9E9] text-[4.5vw] text-center leading-[5vw] '>Let’s make something <br /> healthier together</h2>
      </div>

      <Footerimg />
      <Footer />
    </div>
  )
}

export default Detail