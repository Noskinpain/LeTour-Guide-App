import React from 'react'
import { TbMoodCrazyHappy } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineTravelExplore } from "react-icons/md";

const MiniContent = () => {
  return (
    <>
      <div className='flex flex-col gap-3 xl:gap-0 xl:justify-between items-center xl:items-start font-serif 
      mx-4  mt-6 text-blue-800 xl:flex-row xl:mx-24 xl:mt-10 md:mb-24'>
      
          <MdOutlineTravelExplore style={{ fontSize: "65px" }} />
          <div className='text-black ml-4 sm:ml-8'>
            <p className='text-3xl text-black'>2,000+ local guides</p>
            <p className="text-lg w-72 text-center md:text-start sm:w-72 font-thin">sharing their expertise for your ultimate exploration.</p>
          </div>
       
       
          <ImLocation2 style={{ fontSize: "65px" }} />
          <div className='text-black ml-4 sm:ml-8'>
            <p className='text-3xl text-black'>Artisanal adventures</p>
            <p className="text-lg w-72 text-center md:text-start sm:w-72 font-thin">Expertly crafted experiences, just for you.</p>
          </div>
     
          <TbMoodCrazyHappy style={{ fontSize: "65px" }} />
          <div className='text-black ml-4 sm:ml-8'>
            <p className='text-3xl'>96% happy travelers</p>
            <p className="text-lg w-72 text-center md:text-start sm:w-72 font-thin">Find out why they rave about us</p>
          </div>
        </div>
     
    </>
  )
}

export default MiniContent
