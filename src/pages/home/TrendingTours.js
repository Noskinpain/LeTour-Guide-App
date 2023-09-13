import React from 'react';
import Slider from 'react-slick';
import { trendingToursData } from '../../data/trendingToursData';
import { Left, Right } from "../../Components/ui/Arrow";
import { ImLocation2 } from "react-icons/im";
import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa"

const TrendingTours = () => {


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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
    ],
  };

  return (
    <div className='px-4 sm:px-24 mt-10 sm:mt-20 font-serif'>
      <p
        className="tracking-widest md:text-3xl text-2xl text-blue-800 pb-2"
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
      >
        Trending Tours
      </p>
      <h1
        className='text-lg font-medium md:text-27'
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
      <div className=''>
        <Slider {...settings} className="overflow-hidden ">
          
          {trendingToursData.map((item, index) => (
            <div key={index} className=''>
            
              <div className='h-450  w-full gap-4 flex justify-around'>
                <div className='h-450 border rounded-xl w-11/12 bg-blue-100 shadow-5xl'>
                <div
                  className="bg-cover bg-center object-cover hover:brightness-125
                   rounded-t-xl w-full sm:w-full h-219"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                   <p className='relative top-4 text-white pl-3 h-10 flex items-center w-24 font-thin rounded-e-lg bg-blue-700 hover:bg-blue-400'>
                    Featured</p> 
                </div>
                <h1 className='flex gap-1 pl-3 pt-4 items-center text-lg text-blue-800'>
                   <ImLocation2 />{item.city}, {item.country}</h1>
                <h1 className='text-xl pl-3 pt-10 hover:underline cursor-pointer'> 
                <Link to={item.url}>{item.name}</Link></h1>
                <h1 className="text-black pl-3 pt-10 ">{item.note}</h1>
                <div className='flex pl-3 pt-3 text-yellow-500 items-center'>
                {[...Array(5)].map((_, i) => (
                      // Render a star for each index less than starRating
                      <FaStar key={i} size={20} color={i < item.starRating ? "#ffc107" : "#c0c0c0"} />
                    ))}
                  <h1 className="text-black ml-8 ">{item.reviews} Reviews</h1>
                </div> 
                </div>
              </div>
              </div>
            
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingTours;
