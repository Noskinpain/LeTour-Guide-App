import React from 'react';


const Subscribe = () => {
  return (
    <>
      <div className="mx-4 md:mx-24 font-serif bg-center bg-cover object-cover hover:brightness-125
       md:mb-96 lg:mx-24 mt-10 mb-20 md:mt-24 h-400 md:h-450  lg:mb-24 sm:mb-16 xl:grid-cols-2 text-white"
      style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_1280.jpg")`}}>

       
        <div className="xl:pt-16 px-6 h-400 sm:px-10 ">
          <h1 className="text-3xl sm:text-4xl text-black font-sans font-bold pt-10 md:pt-0 mt-5 flex justify-center">
            Begin your adventure today!
          </h1>
          <p className="text-black md:text-lg pt-4 md:pt-6 flex justify-center">
            Subscribe for exclusive travel tips, tailor-made itineraries, and<br/> wanderlust-inducing inspiration sent directly to your email.
          </p>
          <div className="flex flex-col text-black items-center pt-6 sm:pt-12 gap-2 sm:gap-5 text-base sm:text-lg">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full xl:w-96 h-12 sm:h-14 rounded-lg pl-2"
            />
            <button className="w-full mt-2 mb-10 xl:mt-0 xl:w-96 h-12 sm:h-14 bg-black rounded-lg text-white font-medium">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
