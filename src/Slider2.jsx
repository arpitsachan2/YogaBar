import React from 'react'

import img1 from './assets/gluten-free-tag.avif'
import img2 from './assets/sugar-free-tag.avif'
import img3 from './assets/natural-tag.avif'
import img4 from './assets/healthy-tag.avif'
import yellow from './assets/yellow-wave-card.png'
import ss1 from './assets/ss1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Slider2 = () => {
  return (

    <div id='qq'>

      <div class="wave-divider">
        <svg viewBox="0 0 1440 110" >
          <path
            fill="#182C1d"
            d="M0,80 
       C120,0 240,160 360,80 
       C480,0 600,160 720,80 
       C840,0 960,160 1080,80 
       C1200,0 1320,160 1440,80 
       L1440,150 
       L0,150 
       Z"
          />
        </svg>
      </div >
      <div className='h-[15vw] bg-[#182C1D] w-[100vw] flex justify-center ' >
        <div className='h-[15vw] bg-[#182C1D]  w-[20vw]   '>
          <img src={img3} className='h-[3vw] w-[10vw] m-[2.5vw]' alt="" />
          <img src={img1} className=' w-[10vw]  ' alt="" />
        </div>

        <div className='h-[15vw] bg-[#182C1D]  w-[45vw]'>
          <h2 id='paytone' className='text-center mt-[1.5vw] text-[5vw]  leading-[5.5vw] text-white '>Simple Ideology. <br />
            Bold Flavours.</h2>
        </div>

        <div className='h-[15vw] bg-[#182C1D]  w-[20vw]'>
          <img src={img2} className=' w-[8vw] ml-[9vw] ' alt="" />
          <img src={img4} className='h-[3vw] w-[12vw] mt-[4vw] '  alt="" />
        </div>

      </div>


      <div className='w-[100vw] h-[vw] bg-[#182C1D] flex justify-center '>

        <div className='bg-[#182C1D] h-[40vw] w-[87vw]   '>

          <Swiper

            spaceBetween={30}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div  >
              <SwiperSlide  >
                <video controls src='https://cdn.shopify.com/videos/c/o/v/ef01ce38be5949b4b6dab31c8244ed88.mp4' className='size-[32vw] ' ></video>

                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Influenced by Yoga. Made by Experts.</h3>
              </SwiperSlide>


              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/dfb8c60859194987bb4389334b1ab7eb.mp4' className='size-[32vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Did you know maida is also called 'white poison'?</h3>
              </SwiperSlide>
              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/19ba4ffb2a464fd198bd2d4d1f880eb2.mp4' className='size-[32vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Your protein needs depend on your lifestyle.</h3>
              </SwiperSlide>
              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/bdf74f33742c4f8c81b8a0536a03e375.mp4' className='size-[32vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Did you know there are two types of sugars?</h3>
              </SwiperSlide>
              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/824cef0fd5f64a97bfd2b3cc9d47ba2a.mp4' className='size-[32vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  India Best-Selling Dark Chocolate Muesli, for a reason.</h3>
              </SwiperSlide>

            </div>
          </Swiper>
        </div>
      </div>
    <img src={ss1} alt="" />
    </div>
  )
}

export default Slider2
