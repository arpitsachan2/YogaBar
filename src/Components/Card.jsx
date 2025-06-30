import React from 'react'
import new1 from '../assets/files/new1.png';
import small1 from '../assets/small/Strength.webp';
import small2 from '../assets/small/Lab_Test.webp';
import small3 from '../assets/small/added_probiotics.webp';
import { Link } from 'react-router-dom';


const Card = (p1) => {
  return (
    <div id='qq'>
      <div className='w-[20vw] h-[40vw] max-sm:w-[45vw]  max-sm:h-[70vw]  '>
        <Link to="/Detail">

        <div className='  h-[22vw] -mb-[3vw] w-[20vw] flex justify-center items-center  bg-[#F8F2E3]  rounded-t-[50%] 
              max-sm:w-[45vw] max-sm:h-[50vw] '>
          <img className='size-[15vw] duration-100 active:scale-105   cursor-pointer hover:scale-105 border-[#F8F2E3]
                max-sm:size-[36vw] '
            src={p1.img} alt="" />
          <img className='size-[5vw] mb-[14vw] -m-[2.6vw]
                 max-sm:size-[10vw] max-sm:mb-[30vw]  max-sm:absolute max-sm:ml-[33vw] ' src={new1} alt="" />
        </div>
        <div className='size-[2.3vw] ml-[10vw] max-sm:size-[6vw] max-sm:ml-[22vw] max-sm:-mt-6  flex gap-[1vw]  '>
          <img className='bg-[#F8C105]  rounded-[50%] p-1' src={small1} alt="" />
          <img className='bg-[#9B32E3] rounded-[50%] p-1 ' src={small2} alt="" />
          <img className='bg-[#08744A] rounded-[50%] p-1 ' src={small3} alt="" />
        </div>


        <div className='mt-[2vw]  h-[12.5vw] leading-[2vw]  max-sm:h-[24vw] ' >
          <span className='font-bold text-[1.6vw] hover:underline cursor-pointer active:underline
                 max-sm:text-[3.5vw] max-sm:leading-[5vw]  ' >
            {p1.title}
          </span>
          <span className=' text-[1.6vw] line-through max-sm:text-[3.5vw] ' >
            <br />  Rs. {p1.lrs}
          </span>
          <span className='font-bold text-[1.6vw] max-sm:text-[3.5vw]  ' >
            &nbsp;  Rs. {p1.rs}
          </span>
          <span className='font-bold text-[1vw] max-sm:text-[2vw] '>
            <br />  Inclusive of All Taxes
          </span>
        </div>
          </Link>
        
        <div className='bg-[#1A2C1E]  text-white flex justify-center items-center 
            rounded-3xl hover:border-black border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw] duration-100 active:scale-105
            max-sm:text-[3.5vw] max-sm:h-[9vw] max-sm: '>
          <span  > Add to cart</span>
        </div>
       

      </div>



      <br />
    




    </div>

  )
}

export default Card

