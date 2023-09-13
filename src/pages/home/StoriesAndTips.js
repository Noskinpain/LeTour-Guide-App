import React, { useState } from 'react';
import Slider from 'react-slick';
import { storiesData } from "../../data/storiesData";
import { Left, Right } from "../../Components/ui/Arrow";
import { ImLocation2 } from "react-icons/im";
import Modal from 'react-modal';


const modalStyles = {
  content: {
    width: '60%',
    margin: 'auto',
    padding: '20px',
    height: "500px"
  },
};

Modal.setAppElement('#root');

const StoriesAndTips = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const openModal = (index) => {
    setSelectedStory(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setModalIsOpen(false);
  };

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
    <div className='px-4 sm:px-24 mt-10 sm:mt-24 font-serif'>
      <p
        className="tracking-widest md:text-3xl text-2xl text-blue-800 pb-2"
      // data-aos="flip-left"
      // data-aos-easing="ease-out-cubic"
      // data-aos-duration="2000"
      >
        Stories, tips & guides
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
      <Slider {...settings} className="overflow-hidden">
        {storiesData.map((item, index) => (
          <div key={index} className=''>
            <div className='h-450 w-full flex justify-around'>
              <div className='h-450 w-11/12 border bg-blue-100 rounded-xl cursor-pointer'
               onClick={() => openModal(index)}>
                <div
                  className="bg-cover bg-center object-cover hover:brightness-125 rounded-t-xl w-full sm:w-full h-219"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                </div>
                <div className='mt-10 pl-3'>
                  <p className='font-bold text-xl text-black'>{item.title}</p>
                  {item.location && (
                    <p className='text-xl pt-5'>
                      <ImLocation2 className='inline text-blue-800 text-xl' /> {item.location.city}, {item.location.country}
                    </p>
                  )}
                  <p className='twxt-sm pt-5 italic text-blue-400'>click for more content</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Story Modal"
      >
        <button className="font-bold text-2xl" onClick={closeModal}>X</button>
        {selectedStory !== null && (
          <div className="modal-content">
            <h2 className='text-2xl font-bold text-center text-blue-800'>{storiesData[selectedStory].title}</h2>
            <div className='text-lg pt-10 pb-10 font-serif px-4 shadow-md'>{storiesData[selectedStory].content}</div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default StoriesAndTips;





