import React from 'react'
import img1 from '../assets/icon.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
    return (
        <div id='qq'>
            <div className='w-[100vw] text-[#FFF9E9] gap-[3vw] h-[40vw] bg-[#E33675] flex justify-center items-center '>

                <div className=' h-[32vw] w-[30vw] '>
                    <img className='size-[7vw] ' src={img1} alt="" />
                    <br />
                    <p className='text-[#FFF9E9] uppercase '>We’re a nutrition-led food company that prides itself in making lip-smacking food that’s good for you. All without any artificial
                        colours, chemicals or preservatives. IYKYK. And if you don’t, what are you waiting for? Go on and try some! </p> <br />

                    <div className='flex gap-[2vw]'>
                        <FaInstagramSquare className='text-[#FFF9E9]  text-[4vw] -mt-[0.2vw]' />
                        <FiLinkedin className='text-[#E33675] bg-[#FFF9E9] rounded-sm text-[3.5vw]  ' />
                        <FiFacebook className='text-[#E33675] bg-[#FFF9E9] rounded-sm text-[3.5vw] ml-[0.25vw] ' />
                    </div>
                </div>
                <div className=' h-[32vw]  leading-[3.5vw]  '>
                    <h2 className=' text-[2vw] '>SHOP</h2>
                    <h3>ALL PRODUCTS</h3>
                    <h3>NEW LAUNCHES & OFFERS </h3>
                    <h3>BREAKFAST</h3>
                    <h3>PROTEIN</h3>
                    <h3>MUESLI</h3>
                    <h3>BARS</h3>
                    <h3>YOGABABAY</h3>
                    <h3>DRY FRUITS & SEEDS</h3>


                </div>
                <div className='h-[32vw]  uppercase leading-[3.5vw] '>
                    <h2 className='text-[2vw]'>Quick links</h2>
                    <h3>Shipping & Delivery</h3>
                    <h3>Terms and Conditions</h3>
                    <h3>Privacy Policy</h3>
                </div>
                <div className=' h-[32vw] w-[20vw] leading-[3.5vw] uppercase '>
                    <h2 className='text-[2vw]'>Contact us</h2>
                    <h3>ph: +919606030616</h3>
                    <h3>We are available Monday to Saturday; 10 am - 6:00 pm.</h3>
                    <h3>Email: hello@yogabars.in</h3>
                    <h3>We try to respond within 48 hours.</h3>
                </div>

            </div >

            <div className=' bg-[#E33675] flex justify-center h-[7vw] items-center'>
                <div className='text-[#fff9e9] w-[90vw] flex justify-center items-center  border-t-[0.1vw] border-b-[0.1vw]  h-[7vw] bg-[#E33675]'>

                    <h2>Who needs a magic wand when you've got our protein bars? They'll turn your cravings into happy little lettuce leaves. Poof! 🪄✨</h2>
                </div>
            </div>
            <div className='bg-[#E33675] h-[5.8vw]'>
                <br /> <br />
                <h3 className='text-center text-[#fff9e9] text-[1vw] ' >© 2025, Yoga Bars </h3>
            </div>

            <div className='bg-[#1A2C1E]  h-[75px] flex items-center ' >
                <div id="moving-text">
                    <div class="con">
                        <h1>
                            WE BELIEVE IN THE POWER OF HEALTHY INDULGENCE
                            🧘
                            FALL IN LOVE WITH THE YOGA WAY OF LIFE
                            🧘

                        </h1>
                    </div>

                    <div class="con">
                        <h1>
                            WE BELIEVE IN THE POWER OF HEALTHY INDULGENCE
                            🧘
                            FALL IN LOVE WITH THE YOGA WAY OF LIFE
                            🧘
                        </h1>
                    </div>

                    <div class="con">
                        <h1>
                            WE BELIEVE IN THE POWER OF HEALTHY INDULGENCE
                            🧘
                            FALL IN LOVE WITH THE YOGA WAY OF LIFE
                            🧘


                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
