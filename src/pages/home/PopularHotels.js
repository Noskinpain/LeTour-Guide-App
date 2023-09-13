import React from 'react';
import Slider from 'react-slick';
import { hotelData } from "../../data/hotelData";
import { Left, Right } from "../../Components/ui/Arrow";
import { ImLocation2 } from "react-icons/im";

const PopularHotels = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Right />,
    prevArrow: <Left />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
        
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  return (
    <div className='px-4 sm:px-24 mt-10 sm:mt-24 mb-5'>
      <p
        className="tracking-widest md:text-3xl text-2xl text-blue-800 md:pb-2"
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
      >
        TOP HOTELS
      </p>
      <h1
        className='text-lg font-medium md:text-27 '
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
      >
        on LeTour
        <hr
          style={{
            backgroundColor: '#ffbb58',
            width: '75px',
            height: '2px',
            border: 'none',
            marginTop: '0px',
            marginLeft: '0px',
            marginBottom: '20px'
          }}
        />
      </h1>
      <Slider {...settings} className="overflow-hidden">
        {hotelData.map((item, index) => (
          <div key={index} className=''>
            <div className='h-450 w-full flex justify-around'>
            <div className='h-450 w-11/12 rounded-xl  border bg-blue-100'>
              <div
                className="bg-cover bg-center rounded-t-xl object-cover w-11/12  h-219"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <p className='relative top-4 text-white pl-3 h-10 flex items-center w-24 font-thin rounded-e-lg bg-red-600 hover:bg-red-400'>
                  Featured
                </p>
              </div>
              <h1 className='flex gap-1 pl-3 pt-4 items-center font-light text-blue-800'>
                <ImLocation2 />
                {item.city}, {item.country}
              </h1>
              <h1 className='text-xl pl-3 pt-3 pr-3 hover:underline cursor-pointer'>{item.name}</h1>
              <div className='flex pl-3 text-yellow-500'>
                {[...Array(5)].map((starRating, i) => (
                  <h1 key={i}>{item.star}</h1>
                ))}
              </div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularHotels;
