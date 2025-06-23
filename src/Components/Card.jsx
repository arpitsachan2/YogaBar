import React from 'react'
import "./Card.css";
import cart1 from '../assets/files/pack_of_6.png';
import cart4 from '../assets/files/Plant-Protein-Chocolate-FOP_1.png';
import cart3 from '../assets/files/Plant-Protein-Unflavoured-FOP_1.png';
import new1 from '../assets/files/new1.png';
import cart2 from '../assets/files/Plant-Protein-Coffee-FOP_1.png';
import small1 from '../assets/small/Strength.webp';
import small2 from '../assets/small/Lab_Test.webp';
import small3 from '../assets/small/added_probiotics.webp';
const Card = () => {
  return (
    <div id='qq'>
<div className=' w-[100vw] h-[42vw] gap-[3vw] flex justify-center  '>


      <div className='w-[20vw]   h-[40vw]  '>

        <div className='h-[22vw] -mb-[3vw] w-[20vw] flex justify-center items-center   bg-[#F8F2E3]  rounded-t-[50%] '>
          <img className='size-[15vw]    cursor-pointer hover:border-4 border-[#F8F2E3]   '
            src={cart1} alt="" />
          <img className='size-[5vw] mb-[14vw] -m-[2.6vw]   ' src={new1} alt="" />
        </div>
        <div className='size-[2.3vw] ml-[10vw]   flex gap-[1vw]  '>
          <img className='bg-[#F8C105]  rounded-[50%] p-1' src={small1} alt="" />
          <img className='bg-[#9B32E3] rounded-[50%] p-1 ' src={small2} alt="" />
          <img className='bg-[#08744A] rounded-[50%] p-1 ' src={small3} alt="" />
        </div>


        <div className='mt-[2vw]  h-[12.5vw] ' >
          <span className='font-bold text-[1.6vw] hover:underline cursor-pointer ' >
            26g Protein Shake Mango Rizz
          </span>
          <span className='font-bold text-[1.6vw]' >
            <br />  Rs. 840.00
          </span>
          <span className='font-bold text-[1vw]'>
            <br />  Inclusive of All Taxes
          </span>
        </div>
        <div className='bg-black  text-white flex justify-center items-center 
      rounded-4xl hover:border-black border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw]   '>
          <span  > Add to cart</span>
        </div>
      </div>
      <div className='w-[20vw]   h-[40vw]  '>

        <div className='h-[22vw] -mb-[3vw] w-[20vw] flex justify-center items-center   bg-[#F8F2E3]  rounded-t-[50%] '>
          <img className='size-[15vw]    cursor-pointer hover:border-4 border-[#F8F2E3]   '
            src={cart2} alt="" />
          <img className='size-[5vw] mb-[14vw] -m-[2.6vw]   ' src={new1} alt="" />
        </div>
        <div className='size-[2.3vw] ml-[10vw]   flex gap-[1vw]  '>
          <img className='bg-[#F8C105]  rounded-[50%] p-1' src={small1} alt="" />
          <img className='bg-[#9B32E3] rounded-[50%] p-1 ' src={small2} alt="" />
          <img className='bg-[#08744A] rounded-[50%] p-1 ' src={small3} alt="" />
        </div>



        <div className='mt-[2vw] h-[12.5vw] ' >
          
          <span className='font-bold text-[1.6vw] hover:underline cursor-pointer ' >
            
           ProClean Plant Protein with Monk Fruit (Coffee) 500g
          </span>
          
          <span className='font-bold text-[1.6vw]' >
            <br />  Rs. 1750.00
          </span>
          <span className='font-bold  text-[1vw]'>
            <br />  Inclusive of All Taxes
          </span>
        </div>
        <div className='bg-black  text-white flex justify-center items-center 
      rounded-4xl hover:border-black border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw]  '>
          <span  > Add to cart</span>
        </div>
      </div>
      <div className='w-[20vw]   h-[40vw]  '>

        <div className='h-[22vw] -mb-[3vw] w-[20vw] flex justify-center items-center   bg-[#F8F2E3]  rounded-t-[50%] '>
          <img className='size-[15vw]    cursor-pointer hover:border-4 border-[#F8F2E3]   '
            src={cart3} alt="" />
          <img className='size-[5vw] mb-[14vw] -m-[2.6vw]   ' src={new1} alt="" />
        </div>
        <div className='size-[2.3vw] ml-[10vw]   flex gap-[1vw]  '>
          <img className='bg-[#F8C105]  rounded-[50%] p-1' src={small1} alt="" />
          <img className='bg-[#9B32E3] rounded-[50%] p-1 ' src={small2} alt="" />
          <img className='bg-[#08744A] rounded-[50%] p-1 ' src={small3} alt="" />
        </div>



        <div className='mt-[2vw] h-[12.5vw] ' >
          <span className='font-bold text-[1.6vw] hover:underline cursor-pointer' >
            ProClean Plant Protein with Monk Fruit (Unflavoured) 500g
          </span>
          <span className='font-bold text-[1.6vw]' >
            <br />  Rs. 1650.00
          </span>
          <span className='font-bold text-[1vw]'>
            <br />  Inclusive of All Taxes
          </span>
        </div>
        <div className='bg-black  text-white flex justify-center items-center 
      rounded-4xl hover:border-black border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw]  '>
          <span  > Add to cart</span>
        </div>
      </div>
      <div className='w-[20vw]   h-[40vw]  '>

        <div className='h-[22vw] -mb-[3vw] w-[20vw] flex justify-center items-center   bg-[#F8F2E3]  rounded-t-[50%] '>
          <img className='size-[15vw]    cursor-pointer hover:border-4 border-[#F8F2E3]   '
            src={cart4} alt="" />
          <img className='size-[5vw] mb-[14vw] -m-[2.6vw]   ' src={new1} alt="" />
        </div>
        <div className='size-[2.3vw] ml-[10vw]   flex gap-[1vw]  '>
          <img className='bg-[#F8C105]  rounded-[50%] p-1' src={small1} alt="" />
          <img className='bg-[#9B32E3] rounded-[50%] p-1 ' src={small2} alt="" />
          <img className='bg-[#08744A] rounded-[50%] p-1 ' src={small3} alt="" />
        </div>



        <div className='mt-[2vw] h-[12.5vw] ' >
          <span className='font-bold text-[1.6vw] hover:underline cursor-pointer' >
           ProClean Plant Protein with Monk Fruit (Chocolate) 500g
          </span>
          <span className='font-bold text-[1.6vw]' >
            <br />  Rs. 1750.00
          </span>
          <span className='font-bold text-[1vw]'>
            <br />  Inclusive of All Taxes
          </span>
        </div>
        <div className='bg-black  text-white flex justify-center items-center 
      rounded-4xl hover:border-black border-2 cursor-pointer text-[1.4vw] font-bold  h-[3.5vw]  '>
          <span  > Add to cart</span>
        </div>
      </div>
      
</div>

    </div>
  )
}

export default Card

