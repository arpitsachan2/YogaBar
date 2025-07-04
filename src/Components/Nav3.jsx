import React from 'react'
import nt1 from "../assets/gluten_free.webp"
import nt2 from "../assets/nutritionally_balanced.webp"
import nt3 from "../assets/no_chemicals.webp"
import banner from "../assets/files/Artboard_1_11.jpg";
import banner1 from "../assets/files/Mobile_banner_-_26g_mango_shake.jpg";

const Nav3 = () => {
  return (
    <div id='qq'>
                 <img id='aa1' className='' src={banner} alt="" />
            <img id='aa' className='size-0' src={banner1} alt="" />

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


            <div className='h-[22vw] w-[100vw]   flex justify-center items-center  ' >

                <div className='h-[16vw] w-[90vw]  border-b-2 border-gray-200 flex ' >

                    <div className='h-[16vw] w-[45vw]  '>
                        <h2 id='end'>A DISCOGRAPHY of <br /> YUMMINESS</h2>
                        <p id='end2' >
                            From crunch rock (crunchy corn flakes) to smooth jazz (silky peanut butter), discover
                            lip-smacking food that’ll make your taste buds sing!
                        </p>
                    </div>
                    <div className='h-[16vw] w-[45vw]  flex justify-center items-center'>


                        <div className='h-[7vw] w-[40vw] flex items-center gap-2  '>

                            <div className='  h-[6vw] w-[8vw]  '>
                                <img className='bg-[#F9C105] p-1 size-[35px] rounded-[50%] ml-[2.5vw]  '
                                    src={nt1} alt="" />

                                <span className=' text-[1.3vw] text-gray-400 ml-[0.5vw] ' > Gluten  Free</span>
                            </div>
                            <div className='  h-[6vw] w-[14vw]  '>
                                <img className='bg-[#9B32E3] p-1  size-[35px] ml-[5.2vw] rounded-[50%]'
                                    src={nt2} alt="" />
                                <span className='text-[1.3vw] text-gray-400 ml-[0.4vw] '>Nutritionally Balanced</span>
                            </div>

                            <div className='  h-[6vw] w-[15vw]'>
                                <img className='bg-[#08744A] p-1 size-[35px] ml-[6vw] rounded-[50%]'
                                    src={nt3} alt="" />
                                <span className='text-[1.3vw] text-gray-400 ml-[0.3vw] ' >No Added Preservatives</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Nav3