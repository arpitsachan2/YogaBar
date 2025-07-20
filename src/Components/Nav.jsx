import React, { useState } from 'react';
import "./Nav.css";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import icon from "../assets/icon.png"
import { Link } from "react-router-dom"
import muesli from "../assets/files/Group_766.png"
import shake from "../assets/files/pack_of_6.png"
import whey from "../assets/card3/Group_822.webp"
import all from "../assets/files/Group80-_Compressify.io_3465c3b9-3ab1-4e62-a367-f0f8569a9965.webp"
import breakfast from "../assets/Mask_group_1_9ba2ad85-10e6-4734-8722-a03fea93606b.webp"
import Protein from "../assets/files/PROTEIN_MINI_BOX_FOP.webp"
import bar from "../assets/files/Power_Up_Monocarton_Mockup.png"
import baby from "../assets/files/Group_448.png"
import oats from "../assets/Mask_group_2_53c3b94d-46f8-4431-ad8e-caa0ea3396d5.avif"
import seed from "../assets/Group84-_Compressify.io.webp"


export default function CartDrawer() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  if (isShopOpen) {
    document.body.style.overflow = 'hidden'; // Disable scroll
  } else {
    document.body.style.overflow = 'auto'; // Enable scroll
  }
  return (
    <div id='qq' >
      <div id='cart' className='bg-[#E33675] w-[100vw] h-[15vh] flex justify-center items-center '>

        <div className=' w-[43vw]'>

          <button
            onClick={() => setIsShopOpen(true)}
            className=' font-bold text-white text-xl flex duration-100 active:scale-105'
          >
            <FaLocationArrow />
            <span className='hover:underline cursor-pointer hover:scale-105 active:underline ' >SHOP</span>
          </button>
        </div>
        <div className={`fixed top-[8vw]  h-[35vw]  w-[100vw] bg-[#49058E] flex  z-50  ${isShopOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className=" w-[25vw] h-[35vw] border-r-2 border-black ">
            <h2 className="text-[1.7vw] font-bold text-white h-[5vw]  flex justify-center items-center bg-black ">SHOP BY CATEGORY</h2>
          </div>
          <div className='w-[70vw] h-[30vw] flex m-[1vw]   flex-wrap gap-[2vw]  '>
            <Link to="/New">
              <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
                <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>New Launches & Offers</h3>
                <img className='h-[7vw]  w-[7vw]' src={shake} alt="" />
              </div>
            </Link>
            <Link to="/WheyProtein">
              <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
                <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Whey Protein</h3>
                <img className='h-[7vw]  w-[7vw]' src={whey} alt="" />
              </div>
            </Link>
            <Link to="/AllProducts">
              <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
                <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>All Products</h3>
                <img className='h-[7vw]  w-[7vw]' src={all} alt="" />
              </div>
            </Link>
            <Link to="/Breakfast">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Breakfast</h3>
              <img className='h-[7vw]  w-[7vw]' src={breakfast} alt="" />
            </div>
            </Link>
            <Link to="/Protein">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Protein</h3>
              <img className='h-[7vw]  w-[7vw]' src={Protein} alt="" />
            </div>
            </Link>
            <Link to="/Bars">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Bars</h3>
              <img className='h-[7vw]  w-[7vw]' src={bar} alt="" />
            </div>
            </Link>
            <Link to="/Muesli">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Muesli</h3>
              <img className='h-[7vw]  w-[7vw]' src={muesli} alt="" />
            </div>
            </Link>
            <Link to="/YogaBaby">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Yoga Baby</h3>
              <img className='h-[7vw] rounded-[2vw]  w-[7vw]' src={baby} alt="" />
            </div>
            </Link>
            <Link to="/Seeds">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Dry Fruits & Seeds</h3>
              <img className='h-[7vw]  w-[7vw]' src={seed} alt="" />
            </div>
            </Link>
            <Link to="/Oats">
            <div className='h-[8.5vw]  w-[15.5vw] rounded-2xl flex items-center justify-center bg-amber-50'>
              <h3 className='text-black h-[8vw] flex justify-center items-center w-[7vw] text-[1.5vw]  '>Oats & Quinoa</h3>
              <img className='h-[7vw]  w-[7vw]' src={oats} alt="" />
            </div>
            </Link>







          </div>
        </div>
        {isShopOpen && (
          <div
            onClick={() => setIsShopOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 "
          />
        )}
















        <div >
          <Link className="bg-red-500" to="/"> <img id='cart1' className=' hover:scale-105 cursor-pointer duration-100 active:scale-105 h-[80px] w-[80px] ' src={icon} alt="" /></Link>

        </div>

        <div id='cart2' className=' w-[43vw] flex justify-end gap-8 text-[30px] '>


          <div className='hover:scale-105 cursor-pointer text-white duration-100 active:scale-105  '>
            < IoSearch />
          </div>

          <Link to="/Login">
            <div className='hover:scale-105 cursor-pointer text-white duration-100 active:scale-105 '>
              <  MdOutlinePersonOutline />

            </div>
          </Link>


          <div className="">

            <button
              onClick={() => setIsCartOpen(true)}
              className="cursor-pointer  text-white gap-1 font-bold flex hover:scale-105 duration-100 active:scale-105"
            >
              <span id='cart3' className='text-xl hover:underline active:underline ' >CART</span>
              <FaCartShopping className='  ' />
            </button>


            <div className={`fixed top-0 right-0 h-[100vw]  w-[30vw] bg-white shadow-lg z-50 transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-lg font-bold">Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-red-600 font-bold cursor-pointer text-xl"
                >
                  ×
                </button>
              </div>


            </div>


            {isCartOpen && (
              <div
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 z-40 bg-black/30 "
              />
            )}
          </div>


        </div>




      </div>

    </div>
  );
}
