import React from 'react'
import back from '../assets/files/Group_717_2.png'
import img1 from '../assets/files/Stuffedbakedapple.jpg'
import img2 from '../assets/files/Peanut_Butter_Banana_Popsicles_Recipe_1.jpg'
import img5 from '../assets/files/Nut_Butter_Chickpea_Recipe.jpg'
import img3 from '../assets/files/Granola_Fruit_Tart_Recipe-_Compressify.io.webp'
import img4 from '../assets/files/Butter_Apple_Sandwich_Recipe_1_-_Compressify.io.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const recipe = () => {
  return (
    <div id='qq' className=''>

      <div className=' w-[100vw] h-[10vw] flex justify-center -mt-[vw] absolute'>

        <h1 id='paytone' className='font-bold  w-[60vw]  text-[5vw] h-[10vw] text-center   text-white absolute leading-[5vw]' >Let’s make something healthier together</h1>
      </div>


      <div className='h-[70vw] w-[100vw]  flex justify-center  items-center  '>
        <div className='  w-[85vw]    ' >
          <Swiper
            spaceBetween={30}
            slidesPerView={2.6}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div  >

              <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                <img className='' src={img1} alt="" />
                <div className='ml-[2vw] mt-[1vw]'>
                  <h2 className='text-[1.5vw]  font-bold'>Stuffed Baked Apple</h2> <br />
                  <h3> ⭐️⭐️⭐️⭐️⭐️</h3>
                  <span>⏰ 5</span>
                </div>
                <div className='h-[5vw]  flex justify-center  '>

                  <div className='bg-black  text-white flex justify-center items-center 
            rounded-4xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                    <span  > View Recipe  </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                <img className='' src={img2} alt="" />
                <div className='ml-[2vw] mt-[1vw]'>
                  <h2 className='text-[1.5vw]  font-bold'>Peanut Butter Banana Popsicle</h2> <br />
                  <h3> ⭐️⭐️⭐️⭐️⭐️</h3>
                  <span>⏰ 5</span>
                </div>
                <div className='h-[5vw]  flex justify-center  '>

                  <div className='bg-black  text-white flex justify-center items-center 
            rounded-4xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                    <span  > View Recipe  </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                <img className='' src={img3} alt="" />
                <div className='ml-[2vw] mt-[1vw]'>
                  <h2 className='text-[1.5vw]  font-bold'>Granola Fruit Tarts</h2> <br />
                  <h3> ⭐️⭐️⭐️⭐️⭐️</h3>
                  <span>⏰ 5</span>
                </div>
                <div className='h-[5vw]  flex justify-center  '>

                  <div className='bg-black  text-white flex justify-center items-center 
            rounded-4xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                    <span  > View Recipe  </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                <img className='' src={img4} alt="" />
                <div className='ml-[2vw] mt-[1vw]'>
                  <h2 className='text-[1.5vw]  font-bold'>Butter Apple Sandwich</h2> <br />
                  <h3> ⭐️⭐️⭐️⭐️⭐️</h3>
                  <span>⏰ 5</span>
                </div>
                <div className='h-[5vw]  flex justify-center  '>

                  <div className='bg-black  text-white flex justify-center items-center 
            rounded-4xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                    <span  > View Recipe  </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                <img className='' src={img5} alt="" />
                <div className='ml-[2vw] mt-[1vw]'>
                  <h2 className='text-[1.5vw]  font-bold'>Nut Butter Chickpeas</h2> <br />
                  <h3> ⭐️⭐️⭐️⭐️⭐️</h3>
                  <span>⏰ 5</span>
                </div>
                <div className='h-[5vw]  flex justify-center  '>

                  <div className='bg-black  text-white flex justify-center items-center 
            rounded-4xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                    <span  > View Recipe  </span>
                  </div>
                </div>
              </SwiperSlide>




            </div>
          </Swiper>
        </div>
      </div>
      <img src={back} className='-mt-[72vw]' />
    </div>
  )
}

export default recipe
