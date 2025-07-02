import React from 'react'
import "./Nav.css";
import { IoSearch } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

import icon from "../assets/icon.png"

import { Link } from "react-router-dom"

const Nav = () => {
    return (

        <div id='qq'>
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

                    <div className=' cursor-pointer  text-white gap-1 font-bold flex hover:scale-105 duration-100 active:scale-105 '>

                        <span id='cart3' className='text-xl hover:underline active:underline ' >CART</span>
                        <FaCartShopping className='  ' />
                    </div>

                </div>




            </div>



        </div>





    )
}

export default Nav
