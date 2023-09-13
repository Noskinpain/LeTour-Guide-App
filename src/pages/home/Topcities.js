import React from 'react';
import { Link } from 'react-router-dom';
import { Left, Right } from "../../Components/ui/Arrow";
import { topCitiesData } from '../../data/topCitiesData';
import "../../style/top-cities.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { ImLocation2 } from "react-icons/im";

const Topcities = () => {


  const navigate = useNavigate()
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
    <>
      <div className="top-cities-wrapper mx-6 md:mx-20 lg:mx-24 mt-10 xl:mt-24 font-serif">
        <p
          className="tracking-widest md:text-3xl text-2xl text-blue-800 md:pb-2"
        // data-aos="zoom-in"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="2000"
        >
          TOP CITIES
        </p>
        <h1
          className='text-lg font-medium md:text-27 '
        // data-aos="zoom-in"
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
      </div>
      <Slider {...settings} className="overflow-hidden mx-6 md:mx-20 lg:mx-24 font-sans">
        {topCitiesData.map((item, index) => (
          <div key={index} className=''>
            <div className='h-[600px] flex justify-around w-full sm:w-full '>
              <div 
              onClick={() => {navigate(item.link)}}
                className="bg-center bg-cover border object-cover w-11/12 shadow-md h-[600px] cursor-pointer hover:brightness-125"
                style={{ backgroundImage: `url(${item.url})` }}
              >
                <div className='bg-red-600 h-12 w-36 relative right-10 flex items-center rounded-2xl -rotate-90'>
                  <p className='text-lg p text-white pl-2 font-thin'>{item.tourno} Tours</p>
                </div>
                <div className='flex items-center text-3xl gap-2 font-bold pl-5 relative top-3/4 pt-5 text-white'>
                  <ImLocation2 />
                  <h2>{item.city}</h2>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default Topcities;
