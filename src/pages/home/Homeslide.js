import React from 'react';
import Slider from 'react-slick';
import { backgroundImagesData } from '../../data/backgroundImageData';
import "../../style/Style.css"


var settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const Homeslide = () => {
  return (
 
    <div className="w-full z-0 font-serif">
    
  <Slider {...settings} className="overflow-hidden">
    {backgroundImagesData.map((item, index) => (
      <div key={index} className="w-full">
        <div
          className="background-image-div md:mx-24 md:h-450 h-96 flex hover:brightness-125
           items-center mx-4 px-4 mt-12 md:mt-0 sm:px-8 md:px-16 lg:px-24 justify-start"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="flex flex-col gap-4 sm:gap-6 text-black">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl lg:w-96 font-sans font-bold">{item.head}</div>
            <div className="text-lg sm:text-xl md:text-3xl lg:text-xl w-full sm:w-2/3 xl:w-2/5">{item.sub}</div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Homeslide;
