import React from 'react'
import img1 from '../assets/icon.png'
import { FaInstagramSquare } from "react-icons/fa";
import { FiLinkedin, FiFacebook } from "react-icons/fi";

const Footer = () => {
    return (
        <div id="qq">
            <div className="w-full text-[#FFF9E9] bg-[#E33675] flex flex-wrap justify-center items-start px-6 py-10 gap-8">

                <div className="w-full md:w-[40%]">
                    <img className="w-16 md:w-20" src={img1} alt="logo" />
                    <p className="text-sm mt-4">
                        We’re a nutrition-led food company that prides itself in making lip-smacking food that’s good for you. All without any artificial
                        colours, chemicals or preservatives. IYKYK. And if you don’t, what are you waiting for? Go on and try some!
                    </p>
                    <div className="flex gap-4 mt-4">
                        <FaInstagramSquare className="text-[#FFF9E9] cursor-pointer text-2xl hover:scale-110 duration-150" />
                        <FiLinkedin className="text-[#E33675] cursor-pointer bg-[#FFF9E9] rounded-sm text-xl p-[2px] hover:scale-110 duration-150" />
                        <FiFacebook className="text-[#E33675] cursor-pointer bg-[#FFF9E9] rounded-sm text-xl p-[2px] hover:scale-110 duration-150" />
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-[15%] leading-8">
                    <h2 className="text-lg font-bold">SHOP</h2>
                    {[
                        "ALL PRODUCTS", "NEW LAUNCHES & OFFERS", "BREAKFAST",
                        "PROTEIN", "MUESLI", "BARS", "YOGABABAY", "DRY FRUITS & SEEDS"
                    ].map((item, i) => (
                        <h3 key={i} className="cursor-pointer hover:underline text-sm">{item}</h3>
                    ))}
                </div>

              
                <div className="w-full sm:w-1/2 md:w-[15%] leading-8">
                    <h2 className="text-lg font-bold">Quick links</h2>
                    {[
                        "Shipping & Delivery",
                        "Terms and Conditions",
                        "Privacy Policy"
                    ].map((item, i) => (
                        <h3 key={i} className="cursor-pointer hover:underline text-sm">{item}</h3>
                    ))}
                </div>

              
                <div className="w-full md:w-[25%] leading-8">
                    <h2 className="text-lg font-bold uppercase">Contact us</h2>
                    <h3 className="text-sm">ph: +91 9606030616</h3>
                    <h3 className="text-sm">Available Mon–Sat; 10 am - 6:00 pm.</h3>
                    <h3 className="text-sm">Email: hello@yogabars.in</h3>
                    <h3 className="text-sm">We try to respond within 48 hours.</h3>
                </div>
            </div>

          
            <div className="bg-[#E33675] py-4 border-y border-[#fff9e9] text-center text-[#fff9e9] px-4 text-sm sm:text-base">
                <h2>
                    Who needs a magic wand when you've got our protein bars? They'll turn your cravings into happy little lettuce leaves. Poof! 🪄✨
                </h2>
            </div>

            
            <div className="bg-[#E33675] py-4 text-center text-[#fff9e9] text-xs sm:text-sm">
                © 2025, Yoga Bars
            </div>

            
<div className='bg-[#1A2C1E]  h-[75px] flex items-center ' >
                <div id="moving-text">
                    <div class="con">
                        <h1>
                            FALL IN LOVE WITH THE YOGA WAY OF LIFE 🧘 PRACTICE YUM-ASANA EVERY DAY 🧘 ALL ABOARD THE YUM EXPRESS 🧘OM NOM NOM YUM
                        </h1>
                    </div>

                    <div class="con">
                        <h1>
                            FALL IN LOVE WITH THE YOGA WAY OF LIFE 🧘 PRACTICE YUM-ASANA EVERY DAY 🧘 ALL ABOARD THE YUM EXPRESS 🧘OM NOM NOM YUM    </h1>
                    </div>
                    
                    <div class="con">
                        <h1>
                            FALL IN LOVE WITH THE YOGA WAY OF LIFE 🧘 PRACTICE YUM-ASANA EVERY DAY 🧘 ALL ABOARD THE YUM EXPRESS 🧘OM NOM NOM YUM     </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
