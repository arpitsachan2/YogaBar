import React, { useState } from 'react';
import "./Nav.css";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import icon from "../assets/icon.png"
import { Link } from "react-router-dom"

export default function CartDrawer() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Protein Bar", price: 99, img: "https://via.placeholder.com/60" },
    { id: 2, name: "Energy Drink", price: 149, img: "https://via.placeholder.com/60" },
  ];

  return (
    <div id='qq' >
      <div id='cart' className='bg-[#E33675] w-[100vw] h-[15vh] flex justify-center items-center '>

        <div className=' w-[43vw]'>
          <Link to="/ShopCategory">
            <div id='shop' className=' font-bold text-white text-xl flex duration-100 active:scale-105 '>
              <FaLocationArrow />
              <span className='hover:underline cursor-pointer hover:scale-105 active:underline ' >SHOP</span>
            </div>
          </Link>
        </div>

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
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="cursor-pointer  text-white gap-1 font-bold flex hover:scale-105 duration-100 active:scale-105"
            >
              <span id='cart3' className='text-xl hover:underline active:underline ' >CART</span>
                                      <FaCartShopping className='  ' />
            </button>

            {/* Slide-Out Cart */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-lg font-bold">Your Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-red-600 font-bold text-xl"
                >
                  ×
                </button>
              </div>

              <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-60px)]">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center">
                      <img src={item.img} alt={item.name} className="w-12 h-12 rounded" />
                      <div className="ml-2">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">₹{item.price}</p>
                      </div>
                    </div>
                    <button className="text-sm text-red-600 hover:underline">Remove</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Light Blur Overlay */}
            {isCartOpen && (
              <div
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 z-40 bg-white/30 "
              />
            )}
          </div>


        </div>




      </div>

    </div>
  );
}
