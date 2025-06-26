import React from 'react'
import './Nav2.css';
import bar1 from './assets/files/bar1.png'
import bar2 from './assets/files/Group_448.png'
import bar3 from './assets/files/Group_446.png'

const Nav2 = () => {
  return (
    <div id='qq' className='w-[100vw] h-[47vw] bg-[#E33675]   ' >
      <h1 id='head'>You’ll definitely love this!</h1>
      <div className='w-[100vw] h-[35vw]  flex justify-center items-center  gap-8 ' >


        <div className='w-[21vw] h-[30vw] bg-[#FECB00]  rounded-b-xl  '>

          <div>
            <img  src={bar1} alt="" />

          </div>

          <svg
            className="wave"
            viewBox="65 0  550 254"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C90,0 180,160 270,80 
          C360,0 450,160 540,80 
          C630,0 720,160 810,80 
          C900,0 990,160 1080,80 
          C1170,0 1260,160 1350,80 
          C1440,0 1440,0 1440,80 
          L1440,200 L0,200 Z"
              fill='#FECB00'
            />
          </svg>
          <div className='h-[3.5vw] w-[21vw]  -mt-[10.3vw] bg-[#FECB00] text-center '>
            <h2 className='font-extrabold  text-[#4D4019] text-[1.5vw]   '>Bars</h2>
          </div>
          <div className='w-[21vw] h-[5vw] bg-[#FECB00] flex justify-center  ' >

            <div className='w-[19vw] h-[6vw] bg-[#FECB00] '>
              <p className=' text-[1vw] text-center  '>Balanced, wholesome, and made with the
                cleanest ingredients – they're  (probably) the most advanced bars in  town!
              </p>
            </div>
          </div>
          <div className='h-[9vw] w-[21vw]  flex justify-center items-center'>

            <div className='bg-black w-[18vw]  flex justify-center items-center rounded-4xl shadow-2xl
           hover:border-[#FECB00] border-2 cursor-pointer font-bold duration-100 active:scale-105  h-[3.5vw] '>

              <span className='text-white text-[1.4vw]  '> Let's Explore!</span>
            </div>
          </div>
        </div>
        <div className='w-[21vw] h-[30vw] bg-[#FECB00]  rounded-b-xl  '>

          <div>
            <img  src={bar2} alt="" />

          </div>

          <svg
            className="wave"
            viewBox="65 0  550 254"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C90,0 180,160 270,80 
          C360,0 450,160 540,80 
          C630,0 720,160 810,80 
          C900,0 990,160 1080,80 
          C1170,0 1260,160 1350,80 
          C1440,0 1440,0 1440,80 
          L1440,200 L0,200 Z"
              fill='#FECB00'
            />
          </svg>
          <div className='h-[3vw] w-[21vw]  -mt-[9vw] bg-[#FECB00] text-center '>
            <h2 className='font-extrabold  text-[#4D4019] text-[1.5vw]   '>Li'l Ones</h2>
          </div>
          <div className='w-[21vw] h-[5vw] bg-[#FECB00] flex justify-center  ' >

            <div className='w-[19vw] h-[6vw] bg-[#FECB00] '>
              <p className=' text-[1vw] text-center  '>We took the most nutritious ancient grains and turned them into the most wholesome treats for your li’l ones! Now, that’s ‘babylicious’
              </p>
            </div>
          </div>
          <div className='h-[7.5vw] w-[21vw]  flex justify-center items-center'>

            <div className='bg-black w-[18vw]  flex justify-center items-center rounded-4xl shadow-2xl
           hover:border-[#FECB00] border-2 cursor-pointer font-bold  duration-100 active:scale-105 h-[3.5vw] '>

              <span className='text-white text-[1.4vw] '> Let's Explore!</span>
            </div>
          </div>
        </div>
        <div className='w-[21vw] h-[30vw] bg-[#FECB00]  rounded-b-xl  '>

          <div>
            <img  src={bar3} alt="" />

          </div>

          <svg
            className="wave"
            viewBox="65 0  550 254"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C90,0 180,160 270,80 
          C360,0 450,160 540,80 
          C630,0 720,160 810,80 
          C900,0 990,160 1080,80 
          C1170,0 1260,160 1350,80 
          C1440,0 1440,0 1440,80 
          L1440,200 L0,200 Z"
              fill='#FECB00'
            />
          </svg>
          <div className='h-[2.5vw] w-[21vw]  -mt-[9vw] bg-[#FECB00] text-center '>
            <h2 className='font-extrabold  text-[#4D4019] text-[1.5vw]   '>Oats & Quinoa</h2>
          </div>
          <div className='w-[21vw] h-[5vw] bg-[#FECB00] flex justify-center  ' >

            <div className='w-[19vw] h-[6vw] bg-[#FECB00] '>
              <p className=' text-[1vw] text-center  '>When it comes to our range of oats, we can’t help but gloat. Chocolatey, nutty, spicy, whole-grainy, it’s simply delightful! No wonder you keep coming back for more!
              </p>
            </div>
          </div>
          <div className='h-[8.5vw] w-[21vw]  flex justify-center items-center'>

            <div className='bg-black w-[18vw]  flex justify-center items-center rounded-4xl shadow-2xl
           hover:border-[#FECB00] border-2 cursor-pointer font-bold duration-100 active:scale-105  h-[3.5vw] '>

              <span className='text-white text-[1.4vw] '> Let's Explore!</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Nav2
