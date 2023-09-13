import React from 'react';

const Discover = () => {
  return (
    <div className='mt-10 md:mt-24 md:mb-24 mx-4 md:mx-24'>
     <div className='bg-center mt-20 bg-cover px-4 lg:px-0 lg:pl-24 pt-36 text-white 
     object-cover w-full h-[450px] sm:h-400 hover:brightness-125' 
     style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg")`}}>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <div className=''>
            <h1 className='text-3xl font-bold font-sans sm:text-4xl pb-2'>Discover Local Flavors.<br /> Restaurants and Cafes</h1>
            <h3 className='text-lg font-semibold'>Join 2000+ Food Enthusiasts & 1200+ Contributors from 3000 Cities</h3>
          
          </div>
          <div className=''></div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
