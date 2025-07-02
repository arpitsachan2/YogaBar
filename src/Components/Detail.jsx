import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
import img10 from '../assets/Community_30.webp'
import wave from '../assets/yellow-wave.png'
import fast from '../assets/Mask_group_1_9ba2ad85-10e6-4734-8722-a03fea93606b.webp'
import oats from '../assets/Mask_group_2_53c3b94d-46f8-4431-ad8e-caa0ea3396d5.avif'
import protein from '../assets/Mask_group_1.webp'
import Footer from './Footer'
import Footerimg from './Footerimg'
import pack6 from '../assets/files/pack_of_6.png'
import sl1 from '../assets/files/pack_of_6.png'
import sl2 from '../assets/3_898fa5bd-e2f2-4ae5-84d6-57a739a66ad2.webp'
import sl3 from '../assets/2_334bfccf-bd64-450b-93de-70f6d2866156.webp'
import sl4 from '../assets/1_9aa571d1-ece5-4926-b390-30b7ca86fddd.webp'
import sl5 from '../assets/4_7359628e-c06d-4e46-b10a-f70d1ed12f54.webp'
import sl6 from '../assets/Loved_by_Millions_72580d28-15fc-4e4a-8779-66d414a3b289.webp'
import sm1 from '../assets/small/Lab_Test.webp'
import sm2 from '../assets/small/added_probiotics.webp'
import sm3 from '../assets/small/Strength.webp'
import star from '../assets/4.5_stars.svg.png'
import amazon from '../assets/amazon.png'
import discount from '../assets/discount.svg'
import excart from '../assets/Mask_group_1.webp'
import excart1 from '../assets/card3/12g_Monocarton_FOP.webp'

import { FaCartShopping } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// import { div } from 'framer-motion/client';

const faqs = [
  {
    question: "What makes Yoga bar’s 26g protein shake different?",
    answer: "Yoga bar’s 26g Protein Shake is a no added sugar, high calcium, 26g protein drink with, rich essential nutrients and two supercilious flavours.",
  },
  {
    question: "Who can drink Yoga bar’s 26g protein shake?",
    answer: "Anyone and everyone. It is suitable for athletes, fitness enthusiasts, and anyone looking for convenient and yummy ways to meet their daily protein intake.",
  },
  {
    question: "Can 26g protein shake help in muscle building?",
    answer: "Yes, it provides protein and essential amino acids needed for muscle repair and growth.",
  },
  {
    question: "When should I drink a 26g protein shake?",
    answer: "It can be consumed before or after a workout, as a meal replacement, or as a protein boost anytime during the day.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const [count, setCount] = useState(0);
  return (
    <div id='qq'>
      <Nav />


      <div className='bg-[#E33675] h-[80vw]'>
        <div className='flex justify-center pt-[2vw] h-[40vw] gap-[3vw]  '>

          <div className='h-[33vw] w-[33vw] flex justify-center  items-center  '>
            <div className=' bg-white h-[33vw]  w-[33vw]    ' >
              <Swiper

                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

              >


                <SwiperSlide className=' ' >
                  <img className='' src={sl1} />

                </SwiperSlide>
                <SwiperSlide className='  ' >
                  <img className='' src={sl2} />


                </SwiperSlide>
                <SwiperSlide className='  ' >
                  <img className='' src={sl3} />

                </SwiperSlide>
                <SwiperSlide className='  ' >
                  <img className='' src={sl4} />

                </SwiperSlide>
                <SwiperSlide className=' ' >
                  <img className='' src={sl5} />

                </SwiperSlide>
                <SwiperSlide className=' ' >
                  <img className='' src={sl6} />

                </SwiperSlide>

              </Swiper>
            </div>
          </div>

          <div className='h-[33vw]  w-[10vw] grid gap-[1.2vw]  '  >

            <div className=' h-[10vw] w-[10vw] bg-[#EB6794] rounded-[1vw] '>
              <div className=' h-[7.5vw] flex items-center justify-center'>
                <img className=' w-[6vw] h-[6vw] rounded-[50vw] p-[1vw] bg-[#F8C105]  ' src={sm3} alt="" /> <br />
              </div>
              <div className='      flex justify-center '>

                <h3 className=' w-[9vw] leading-[1.5vw] font-bold text-center  text-white  text-[1vw] '>26g protein</h3>
              </div>
            </div>
            <div className=' h-[10vw] w-[10vw] bg-[#EB6794] rounded-[1vw] '>
              <div className=' h-[7.5vw] flex items-center justify-center'>
                <img className=' w-[6vw] h-[6vw] rounded-[50vw] p-[1vw] bg-[#9B33E3]  ' src={sm1} alt="" /> <br />
              </div>
              <div className='      flex justify-center '>

                <h3 className=' w-[9vw] leading-[1.5vw]  font-bold text-center   text-white  text-[1vw] '>No Added Sugar</h3>
              </div>
            </div>
            <div className=' h-[10vw] w-[10vw] bg-[#EB6794] rounded-[1vw] '>
              <div className=' h-[7.5vw] flex items-center justify-center'>
                <img className=' w-[6vw] h-[6vw] rounded-[50vw] p-[1vw] bg-[#09744B]  ' src={sm2} alt="" /> <br />
              </div>
              <div className='      flex justify-center '>

                <h3 className=' w-[9vw] leading-[1.5vw] font-bold text-center    text-white  text-[1vw] '>Rich in calcium</h3>
              </div>
            </div>


          </div>

          <div className=' h-[70vw] w-[40vw]'>

            <h1 id='paytone' className='text-[3vw] text-white '>26g Protein Shake Mango Rizz</h1>
            <h3 className='font-medium text-[1.2vw] '>Size : Pack of 6</h3>
            <h3 className='font-medium text-[1.2vw] bg-amber-50 h-[2.2vw] grid place-content-center w-[7.5vw] rounded-[2vw] '>Pack of 6</h3>
            <h2 id='paytone' className='text-[3vw] text-white '>MRP: Rs. 840.00</h2>
            <h6 id='paytone' className=' text-white font-medium text-[1.2vw]' >Inclusive of All Taxes</h6>
            <h6 className='flex gap-[0.5vw] text-white '> <img className='w-[10vw] rounded-[0.5vw] border-[1px] mt-[0.2vw] border-white h-[2vw] ' src={star} alt="" />  4.9/5 ( 45 reviews)</h6>
            <h6 className='flex text-white text-[1.2vw] italic '>10-yr old brand. 1 lakh 5-stars on <img className='w-[2vw] h-[2vw]  ' src={amazon} alt="" /> </h6>
            <h6 className='text-white font-medium text-[1.3vw]'>. <br />
              Contains 26g protein with no added preservatives <br />
              . <br />
              The perfect top-up after your workouts <br />
              . <br />
              Easy to carry, even more delicious to sip on</h6>
            <br />
            <div className="h-[vw] w-[38vw] rounded-[0.5vw] flex  border-white border-2">
              <div><img className='w-[8vw] h-[6.7vw]' src={discount} alt="" /></div>
              <div>

                <h2 className='font-bold text-[1.5vw] text-white'>Flat ₹100 OFF + FREE Gift</h2>
                <h2 className='leading-[1.7vw] text-[1.2vw] text-white '>₹100 OFF on orders over ₹999. FREE surprise gift on orders over ₹999. No code needed.</h2>
              </div>

            </div>
            <br />
            <div className='flex gap-[1vw]'  >

              <div className=" flex items-center justify-center">
                <div className="flex items-center justify-between border-[0.3vw] border-[#fff2e6] rounded-full px-6 py-2 h-[3.5vw] w-[11vw]">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="text-white text-xl font-bold"
                  >
                    –
                  </button>
                  <span className="text-white text-xl font-semibold">{count}</span>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="text-white text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className='bg-[#F9C900]   flex justify-center items-center 
            rounded-3xl  cursor-pointer text-[1.4vw] font-bold w-[25vw] h-[3.5vw] duration-100 active:scale-105
            max-sm:text-[3.5vw] max-sm:h-[9vw] max-sm: '>
                <span  > Add to cart</span>
              </div>

            </div>
            <br />
            <h2 className='text-white uppercase flex '><FaCartShopping /> &nbsp; Frequently Bought Together</h2>
            <div className="h-[15vw] w-[40vw] bg-white flex justify-center items-center gap-[2vw] ">
              <div className="h-[14vw] w-[16vw] border-2 rounded-lg border-gray-300 ">
                <div className="w-[16vw] h-[8vw] flex justify-center items-center ">
                  <img className='h-[8vw] w-[8vw] grid ' src={excart1} alt="" />

                </div>
                <h4 className='text-[1.2vw] font-medium text-center leading-[1.7vw]  '>Power Up Choco Peanut Butter 20g Protein Bars...</h4>
                <h4 className='text-[1.2vw] font-medium pl-[2.5vw] flex gap-[1vw] '>Rs. 650
                  <h5 className='line-through font-normal '>Rs. 700</h5>
                </h4>
                
              </div>
              ✚
                <div className="h-[14vw] w-[16vw] border-2 rounded-lg border-gray-300 ">
                <div className="w-[16vw] h-[8vw] flex justify-center items-center ">
                  <img className='h-[8vw] w-[8vw] grid ' src={excart} alt="" />

                </div>
                <h4 className='text-[1.2vw] font-medium text-center leading-[1.7vw]  '>Protein Minis, 4g Choco Peanut Butter Protein Bar </h4>
                <h4 className='text-[1.2vw] font-medium pl-[2.5vw] flex gap-[1vw] '>Rs. 480
                  <h5 className='line-through font-normal '>Rs. 480</h5>
                </h4>
                
              </div>

            </div>
            <div className='bg-[#F9C900] flex justify-center items-center 
            rounded-b-md  cursor-pointer text-[1.4vw] font-bold w-[40vw] h-[4vw] duration-100 active:scale-105
            max-sm:text-[3.5vw] max-sm:h-[9vw] max-sm: '>
              <span  > Add Selected Items to Cart</span>
            </div>

          </div>

        </div>
      </div>
      <img className='bg-[#E33675]' src={wave} alt="" />


      <div id='paytone' className=' h-[75px] flex items-center  ' >
        <div id="moving-text1">
          <div class="con1">
            <h1>
              FALL IN LOVE WITH THE YOGA WAY OF LIFE 🧘 PRACTICE YUM-ASANA EVERY DAY 🧘 ALL ABOARD THE YUM EXPRESS 🧘OM NOM NOM YUM
            </h1>
          </div>

          <div class="con1">
            <h1>
              FALL IN LOVE WITH THE YOGA WAY OF LIFE 🧘 PRACTICE YUM-ASANA EVERY DAY 🧘 ALL ABOARD THE YUM EXPRESS 🧘OM NOM NOM YUM    </h1>
          </div>

          <div class="con1">
            <h1>
              FALL IN LOVE WITH THE YOGA WAY OF LIFE 🧘 PRACTICE YUM-ASANA EVERY DAY 🧘 ALL ABOARD THE YUM EXPRESS 🧘OM NOM NOM YUM     </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <h2 id='paytone' className="text-4xl font-extrabold text-center text-[#0A2E1E] mb-8">FAQs</h2>

        {faqs.map((faq, i) => (
          <div key={i} className="mb-4">
            <button
              onClick={() => toggle(i)}
              className="w-full bg-[#029EA4] text-white font-bold text-left p-5 rounded-lg flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              {activeIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {activeIndex === i && (
              <div className="bg-[#029EA4] p-5 text-gray-800  rounded-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='bg-[#E33675] w-[100vw]  h-[5vw]'>

      </div>

      <div className='bg-[#F8F2E4] h-[44vw] pt-[6vw] w-[100vw] '>

        <div className=' h-[13vw] w-[100vw] flex items-center justify-center pt-[vw]'>
          <h2 id='sarina' className=' text-[#E33675] mb-[9.2vw] mr-[45vw] rotate-345  text-[5vw] absolute  '>Loved By </h2>
          <h1 id='paytone' className=' text-[12vw] tracking-[-0.6vw] text-[#1A2C1E] '>MILLIONS</h1>
        </div>
        <h3 id='paytone' className='text-[3vw] text-center text-[#1A2C1E] ' >India’s Largest, new-age, health-food brand!</h3>
        <div className=' h-[20vw] w-[100vw] gap-[1.5vw] flex justify-center items-center '>
          <img id='imged1' src={img2} alt="" />
          <img id='imged1' src={img4} alt="" />
          <img id='imged1' src={img10} alt="" />
          <img id='imged1' src={img1} alt="" />
          <img id='imged1' src={img8} alt="" />

        </div>
      </div>


      <div className='bg-[#F8F2E4]  h-[240px] flex    ' >
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
        <div className='flex gap-[4vw] ml-[4vw] items-center h-[27vw]  '>

          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14v  w] w-[14vw] ' src={pack6} alt="" />
            <h2 className='text-center text-[2vw] mt-[1vw]  font-bold'>New Launches & Offers</h2>
          </div>
          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14vw] w-[14vw] ' src={fast} alt="" />
            <h2 className='text-center text-[2vw] mt-[1vw]  font-bold'>Breakfast</h2>
          </div>
          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14vw] w-[14vw] ' src={oats} alt="" />
            <h2 className='text-center text-[2vw] mt-[1vw]  font-bold'>Oats & Quinoa</h2>
          </div>
          <div className=' h-[22vw] w-[15vw] ' >
            <img className='h-[14vw] w-[14vw] ' src={protein} alt="" />
            <h2 className='text-center text-[2vw] mt-[1vw] font-bold'>Protein</h2>
          </div>
        </div>

      </div>

      <div className='bg-[#E33675] h-[20vw] w-[100vw] flex justify-center pt-[2vw] lea  ' >
        <h2 id='paytone' className='text-[#FFF9E9] text-[4.5vw] text-center leading-[5vw] '>Let’s make something <br /> healthier together</h2>
      </div>

      <Footerimg />
      <Footer />
    </div>
  );
}

