import { useContext } from "react";
import Slider from 'react-slick';
import React from "react";
import { Left, Right } from "../Components/ui/Arrow";
import { ImLocation2 } from "react-icons/im";
import PlaceCard from "./PlaceCard";
import { PlaceCardLoader } from "./loaders";
import { MainContext } from "../context/MainContext";




const ToStay = () => {
  // Bringing the hotels state from the Main context and saved into variable name 'places'
  const { hotels: places } = useContext(MainContext);

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
          slidesToScroll: 1,

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
    <>
      {!places || places?.length < 1 ? (
        // if places list is empty, render a Loader
        <PlaceCardLoader />
      ) : (
        // Places are ready, hence the element below is render
        <div className='px-4 sm:px-24 mt-10 sm:mt-24 mb-5 font-serif'>
          <p
            className="tracking-widest md:text-3xl text-2xl text-blue-800 md:pb-2"
          // data-aos="flip-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="2000"
          >
            Hotels Around You
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

            {/* Mapping through the Places Object, a place card is rendered for each data */}
            {places?.map((place, index) => (
              // Place card receives each place as prop
              <PlaceCard key={index} place={place} type="hotels" />
            ))}

          </Slider>
        </div>


      )}
    </>
  );
}

export default ToStay;