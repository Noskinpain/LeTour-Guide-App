import React from 'react'
import { CheckCircleFilled } from '@ant-design/icons';
import img1 from "../../assets/img3.jpg"

const HomeMessage = () => {
  return (
    <div className='xl:grid xl:grid-cols-2 grid-cols-1 mx-6 md:mx-20 lg:mx-24 mt-96 lg:mt-36  pb-20 '>
        <div className='md:mt-0 mt-56'>
          <p className='tracking-widest md:mt-0 mt-10 text-xl  md:text-2xl text-blue-800'>
            THE BEST TRAVEL GUIDE
          </p>
          <h1 className='text-4xl mt-0 md:text-5xl pt-2 leading-tight text-black font-bold'>
            DISCOVER THE
            <span className='text-blue-900'> WORLD</span><br /> WITH OUR GUIDE</h1>
          <p className='pt-4 text-start text-lg text-black font-light'>
            Explore a world of possibilities as you browse through our extensive collection of destinations.
            From enchanting cities to breathtaking landscapes, our platform provides comprehensive
            information on countries with thriving tourism industries.</p>
          <p className='pt-8 text-start text-lg text-black font-light'>
            Whether you're seeking thrilling adventures, cultural experiences, or serene getaways,
            our platform is your gateway to endless possibilities. Stay up-to-date with the latest
            travel insights, insider tips, and captivating travel stories shared by fellow explorers.</p>
          <div className='text-4xl text-blue-900'>
            <CheckCircleFilled /><span className='text-lg ml-4'>1+ Years of Experience</span>
            <br />
            <CheckCircleFilled /><span className='text-lg ml-4'>250+ Tour Destinations</span>
          </div>
        </div>


        <div className='animation flex justify-end ' data-aos="fade-left">
          <div className=' xl:w-96 xl:h-full   bg-blue-900 hidden xl:block'>
            <div className='animation bg-cover object-cover  w-full h-full relative hover:cursor-pointer
             bottom-9 right-9 transition-transform hover:brightness-125 duration-500 hover:scale-110' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" style={{ backgroundImage: `url(${img1})` }}></div>
          </div>
        </div>
      </div>
  )
}

export default HomeMessage