import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Searchbar from './Searchbar';
import logo from "../../assets/logo.png"
import { GiWorld} from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import Homesearchbar from "../ui/Homesearchbar"
import {useAuth} from "../../context/AuthContext"

const Navbar = () => {
  
  const {currentUser, logout} = useAuth()


  const [open, setOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [error, setError] = useState("")

  const updateNavbar = () => {
    if (window.scrollY >= 400) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", updateNavbar)



  const handleToogleMenu = () => {
    setOpen(!open)
  }

  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate("/");
  };

  async function handleLogout (){
   setError("")
   try{
     await logout()
     navigate("/Login")
   } catch {
    setError("failed to logout")
   }
  }

  return (
    <>
      <div className={`${navbar ? "w-full h-14 top-0 border border-2l bg-white mb-2 md:mb-0 md:h-auto fixed z-10 md:px-8 md:pb-2 border-b-2 border-gray-300" : "w-full h-14 mb-2 md:mb-0 md:h-auto md:pb-2  z-5 md:px-8 px-4 border-gray-300 bg-white"}`}>
        <div className='flex lg:justify-center lg:items-start px-4 items-center justify-end'>
         

          <div onClick={handleToogleMenu} className='text-4xl pt-2 flex items-center text-blue-800 font-bold  hover:cursor-pointer lg:hidden'>
            <ion-icon name={open ? "close-circle-outline" : "menu-outline"}></ion-icon>
          </div>
        </div>
        <div className={`md:flex grid gap-y-8 pt-10 mt-3 md:mt-0 md:pt-3 pb-16 md:pb-0 md:gap-8 md:justify-between absolute md:static
         items-center text-white lg:text-gray-700  text-md bg-blue-800 md:bg-inherit w-full md:pl-0 left-0 pl-9 md:w-auto
         md:z-auto z-[1] transition-all duration-300 ease-in ${open ? " opacity-100" : "left-[-490px] md:opacity-100 fixed z-10 opacity-0"}`} >
          
          <GiWorld onCLick={handleButtonClick} className="text-3xl cursor-pointer text-black hidden xl:flex"/>
          <div className={`${navbar ? "md:flex items-center  hidden" : "hidden"}`}>
        <Homesearchbar/>
        </div>
          <div className='flex gap-6 flex-col md:flex-row'>
            <div className='flex items-center  text-black gap-1'>
         
          <MdAccountCircle className="text-2xl cursor-pointer md:text-black text-white"/>
          <div  className="md:text-black text-white font-serif">
           {currentUser.email}
          </div>
          </div>
          <div className='flex items-center gap-1 '>
          <FiLogIn className="text-xl cursor-pointer"/>
          <div  className="font-serif">
         
            <button onClick={handleLogout}>Logout</button>
            {error && <div className="bg-red-500 w-[500px] h-12 justify-center 
        font-bold my-4 flex items-center text-white">{error}</div>}
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
