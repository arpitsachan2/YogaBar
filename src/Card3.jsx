import React from 'react'
import new1 from './assets/files/new1.png';
import small1 from './assets/small/Strength.webp';
import small2 from './assets/small/Lab_Test.webp';
import small3 from './assets/small/added_probiotics.webp';

const Card3 = (p1) => {
  return (
    <div id='qq'   >
      <div className='w-[20vw]  h-[45vw]  '>

        <div className='h-[22vw] -mb-[3vw] w-[20vw] flex justify-center items-center   bg-[#F8F2E3]  rounded-t-[50%] '>
          <img className='size-[15vw] duration-100 active:scale-105   cursor-pointer hover:border-4 border-[#F8F2E3]   '
            src={p1.img} alt="" />
          <img className='size-[5vw] mb-[14vw] -m-[2.6vw]   ' src={new1} alt="" />
        </div>
        <div className='size-[2.3vw] ml-[10vw]   flex gap-[1vw]  '>
          <img className='bg-[#F8C105]  rounded-[50%] p-1' src={small1} alt="" />
          <img className='bg-[#9B32E3] rounded-[50%] p-1 ' src={small2} alt="" />
          <img className='bg-[#08744A] rounded-[50%] p-1 ' src={small3} alt="" />
        </div>


        <div className='mt-[2vw]  h-[12.5vw] leading-[1.8vw]  ' >
          <span className='font-semibold text-[1.6vw] hover:underline cursor-pointer  active:underline ' >
            {p1.title}
          </span>
          <span className=' text-[1.6vw] line-through ' >
            <br />  {p1.lrs}
          </span>
          <span className='font-bold text-[1.6vw]  ' >
            <br />  Rs. {p1.rs}
          </span>
          <span className='font-bold text-[1vw]'>
            <br />  Inclusive of All Taxes
          </span>
        </div>
        <div className='bg-black duration-100 active:scale-105  text-white flex justify-center items-center mt-[2vw]
                rounded-4xl hover:border-black border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw]   '>
          <span  > Add to cart</span>
        </div>
      </div>




    </div>
  )
}

export default Card3
