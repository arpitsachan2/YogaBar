import React from 'react'
import banner from '../assets/Cult_Banner_Web_1.webp'
import Nav from '../Components/Nav'
import Movingtext from '../Movingtext'
import Card5 from '../Components/Card5'
import card4img1 from '../assets/files/Group_766.webp'
import card4img2 from '../assets/files/Group80-_Compressify.io_3465c3b9-3ab1-4e62-a367-f0f8569a9965.webp'
import card4img3 from '../assets/files/rolledOats_1kg.webp'
import card4img4 from '../assets/files/Variety_FOP_BO6_-_B07CN1K1Z6.webp'
import card4img5 from '../assets/files/Group739.webp'
import card4img6 from '../assets/files/Pancake150g.webp'
import card4img7 from '../assets/files/Group470.webp'
import card4img8 from '../assets/files/FNS.webp'
import img1 from '../assets/gluten-free-tag.avif'
import img2 from '../assets/sugar-free-tag.avif'
import img3 from '../assets/natural-tag.avif'
import img4 from '../assets/healthy-tag.avif'
import yellow from '../assets/yellow-wave-card.png'
import ss1 from '../assets/ss1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import back from '../assets/files/Group_717_2.png'
import reimg1 from '../assets/files/Stuffedbakedapple.jpg'
import reimg2 from '../assets/files/Peanut_Butter_Banana_Popsicles_Recipe_1.jpg'
import reimg5 from '../assets/files/Nut_Butter_Chickpea_Recipe.jpg'
import reimg3 from '../assets/files/Granola_Fruit_Tart_Recipe-_Compressify.io.webp'
import reimg4 from '../assets/files/Butter_Apple_Sandwich_Recipe_1_-_Compressify.io.webp'
import Footer from '../Components/Footer'
import Footerimg from '../Components/Footerimg'
const Protein = () => {
  return (
    <div id='qq'>
      <Nav />
      <img src={banner} alt="" />
      <Movingtext />
      <div className='w-[100vw] h-[13vw]  text-center border-b-[0.15vw] border-gray-400 ' >
        <h1 id='paytone' className='text-[6vw] '>Protein</h1>
        <p className='text-[1vw] '>High in protein. Loaded with flavour. ‘Cause we love treating your tastebuds to deliciousness while making sure you reach your fitness goals.</p>
      </div>
      <div className='w-[100vw]  gap-[3vw]  mt-[5vw] flex flex-wrap justify-center items-center '>

        <Card5 title='High Protein Muesli' img={card4img1} lrs='395.00' text='When we say 21g protein, we mean it.' rs='375.00' />
        <Card5 title='20g Protein Oats Choco Almond 850g' img={card4img2} lrs='699.00' rs='664.00' text='We made sure your mornings get the right amount of love and protein.' />
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='Variety Pack Breakfast Bar Box (Pack of 6)' img={card4img4} lrs='359.00' rs='299.00' text="Name a better flavour combo, we'll wait!" />
        <Card5 title='Apricot Fig Breakfast Dark Chocolate Pancake Bar (Pack of 6)' img={card4img5} lrs='359.00' rs='290.00' text="A quick fruity fix for people who're too busy for breakfast." />
        <Card5 title='Dark Chocolate Pancake Mix, 150g' img={card4img6} lrs='150.00' rs='143.00' text="Who said you can't eat pancakes everyday." />
        <Card5 title='Variety Pack Energy Bar (Pack of 10)' img={card4img7} lrs='499.00' rs='399.00' text="Unadulterated energy, in every bite." />
        <Card5 title='Fruits Nuts & Seeds Muesli 700g' img={card4img8} lrs='499.00' rs='449.00' text='Just a lotta fruits, nuts, seeds, and whole grains. Wholesome innit?' />
        <Card5 title='High Protein Muesli' img={card4img1} lrs='395.00' text='When we say 21g protein, we mean it.' rs='375.00' />
        <Card5 title='20g Protein Oats Choco Almond 850g' img={card4img2} lrs='699.00' rs='664.00' text='We made sure your mornings get the right amount of love and protein.' />
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='Variety Pack Breakfast Bar Box (Pack of 6)' img={card4img4} lrs='359.00' rs='299.00' text="Name a better flavour combo, we'll wait!" />
        <Card5 title='Apricot Fig Breakfast Dark Chocolate Pancake Bar (Pack of 6)' img={card4img5} lrs='359.00' rs='290.00' text="A quick fruity fix for people who're too busy for breakfast." />
        <Card5 title='Dark Chocolate Pancake Mix, 150g' img={card4img6} lrs='150.00' rs='143.00' text="Who said you can't eat pancakes everyday." />
        <Card5 title='Variety Pack Energy Bar (Pack of 10)' img={card4img7} lrs='499.00' rs='399.00' text="Unadulterated energy, in every bite." />
        <Card5 title='Fruits Nuts & Seeds Muesli 700g' img={card4img8} lrs='499.00' rs='449.00' text='Just a lotta fruits, nuts, seeds, and whole grains. Wholesome innit?' />

      </div>
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
                <video  controls src='https://cdn.shopify.com/videos/c/o/v/2269d343ab9b41548159b1cb92a81a7b.mp4' className='size-[36vw] ' ></video>

                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Influenced by Yoga. Made by Experts.</h3>
              </SwiperSlide>


              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/994c4def98584b2eaf02c9c4c4ecf39a.mp4' className='size-[36vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Did you know maida is also called 'white poison'?</h3>
              </SwiperSlide>
              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/76eada7b63304816b11dcc494dcee6a9.mp4' className='size-[36vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Your protein needs depend on your lifestyle.</h3>
              </SwiperSlide>
              <SwiperSlide>
                <video controls src='https://cdn.shopify.com/videos/c/o/v/36d5952964394e4787176281141e28d9.mp4' className='size-[36vw]'></video>
                <img src={yellow} alt="" className='absolute -mt-[7.5vw]' />
                <h3 className=' text-[1.5vw] text-gray-800 font-bold absolute -mt-[4.5vw] text-center ' >
                  Did you know there are two types of sugars?</h3>
              </SwiperSlide>
            

            </div>
          </Swiper>
        </div>
      </div>
    <img src={ss1} alt="" />
    </div>
      <div className='w-[100vw]  gap-[3vw]  mt-[5vw] flex flex-wrap justify-center items-center '>

      
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='Variety Pack Breakfast Bar Box (Pack of 6)' img={card4img4} lrs='359.00' rs='299.00' text="Name a better flavour combo, we'll wait!" />
        <Card5 title='Apricot Fig Breakfast Dark Chocolate Pancake Bar (Pack of 6)' img={card4img5} lrs='359.00' rs='290.00' text="A quick fruity fix for people who're too busy for breakfast." />
        <Card5 title='Dark Chocolate Pancake Mix, 150g' img={card4img6} lrs='150.00' rs='143.00' text="Who said you can't eat pancakes everyday." />
        <Card5 title='Variety Pack Energy Bar (Pack of 10)' img={card4img7} lrs='499.00' rs='399.00' text="Unadulterated energy, in every bite." />
        <Card5 title='Fruits Nuts & Seeds Muesli 700g' img={card4img8} lrs='499.00' rs='449.00' text='Just a lotta fruits, nuts, seeds, and whole grains. Wholesome innit?' />

      </div>
          <div id='qq' className='pt-[3vw]'>
      
            <div className=' w-[100vw] h-[10vw] flex justify-center  absolute'>
      
              <h1 id='paytone' className='font-bold  w-[60vw]  text-[5vw] h-[10vw] text-center   text-white absolute leading-[5vw]' >Lets make something healthier together</h1>
            </div>
      
      
            <div className='h-[70vw] w-[100vw]  flex justify-center  items-center  '>
              <div className='  w-[85vw]    ' >
                <Swiper
                  spaceBetween={30}
                  slidesPerView={2.6}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
      
                >
      
      
                  <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                    <img className='' src={reimg1} />
                    <div className='ml-[2vw] mt-[1vw]'>
                      <h2 className='text-[1.5vw]  font-bold'>Stuffed Baked Apple</h2> <br />
                      <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                      <span>⏰ 5</span>
                    </div>
                    <div className='h-[5vw]  flex justify-center  '>
      
                      <div className='bg-black  text-white flex justify-center items-center duration-100 active:scale-105
                  rounded-3xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                        <span  > View Recipe  </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                    <img className='' src={reimg2} />
                    <div className='ml-[2vw] mt-[1vw]'>
                      <h2 className='text-[1.5vw]  font-bold'>Peanut Butter Banana Popsicle</h2> <br />
                      <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                      <span>⏰ 5</span>
                    </div>
                    <div className='h-[5vw]  flex justify-center  '>
      
                      <div className='bg-black  text-white flex justify-center items-center duration-100 active:scale-105
                  rounded-3xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                        <span  > View Recipe  </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                    <img className='' src={reimg3} />
                    <div className='ml-[2vw] mt-[1vw]'>
                      <h2 className='text-[1.5vw]  font-bold'>Granola Fruit Tarts</h2> <br />
                      <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                      <span>⏰ 5</span>
                    </div>
                    <div className='h-[5vw]  flex justify-center  '>
      
                      <div className='bg-black  text-white flex justify-center items-center duration-100 active:scale-105
                  rounded-4xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                        <span  > View Recipe  </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                    <img className='' src={reimg4} />
                    <div className='ml-[2vw] mt-[1vw]'>
                      <h2 className='text-[1.5vw]  font-bold'>Butter Apple Sandwich</h2> <br />
                      <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                      <span>⏰ 5</span>
                    </div>
                    <div className='h-[5vw]  flex justify-center  '>
      
                      <div className='bg-black  text-white flex justify-center items-center duration-100 active:scale-105
                  rounded-3xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                        <span  > View Recipe  </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className='bg-[#F8F2E3] h-[80vw] rounded-b-xl   ' >
                    <img className='' src={reimg5} />
                    <div className='ml-[2vw] mt-[1vw]'>
                      <h2 className='text-[1.5vw]  font-bold'>Nut Butter Chickpeas</h2> <br />
                      <h3>⭐️⭐️⭐️⭐️⭐️</h3>
                      <span>⏰ 5</span>
                    </div>
                    <div className='h-[5vw]  flex justify-center  '>
      
                      <div className='bg-black  text-white flex justify-center items-center duration-100 active:scale-105
                  rounded-3xl hover:border-black border-[#F8F2E2] border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] w-[28vw]    '>
                        <span  > View Recipe  </span>
                      </div>
                    </div>
                  </SwiperSlide>
      
      
      
      
      
                </Swiper>
              </div>
            </div>
            <img src={back} className='-mt-[72vw]' />
          </div>
           <div className='w-[100vw]  gap-[3vw]  mt-[5vw] flex flex-wrap justify-center items-center '>

      
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='100% Rolled Oats 1kg' img={card4img3} lrs='490.00' rs='466.00' text='Take your breakfast to the next level, overnight!' />
        <Card5 title='Variety Pack Breakfast Bar Box (Pack of 6)' img={card4img4} lrs='359.00' rs='299.00' text="Name a better flavour combo, we'll wait!" />
        <Card5 title='Apricot Fig Breakfast Dark Chocolate Pancake Bar (Pack of 6)' img={card4img5} lrs='359.00' rs='290.00' text="A quick fruity fix for people who're too busy for breakfast." />
        <Card5 title='Dark Chocolate Pancake Mix, 150g' img={card4img6} lrs='150.00' rs='143.00' text="Who said you can't eat pancakes everyday." />
        <Card5 title='Variety Pack Energy Bar (Pack of 10)' img={card4img7} lrs='499.00' rs='399.00' text="Unadulterated energy, in every bite." />
        <Card5 title='Variety Pack Energy Bar (Pack of 10)' img={card4img7} lrs='499.00' rs='399.00' text="Unadulterated energy, in every bite." />
       

      </div>
      <Footerimg/>
<Footer/>
    </div>
  )
}

export default Protein
