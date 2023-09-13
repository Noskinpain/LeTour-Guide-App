import React from 'react';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled, MailFilled, HomeFilled } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {  useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate()
  const aboutPage = () => {
    navigate("/About")
  }
  const blogPage = () => {
    navigate("/Blog")
  }
  const tourPage = () => {
    navigate("/Tour")
  }
  return (
    <>
      <div className="bg-purple-100 px-6 md:px-20 pt-20 bg-fixed font-serif">
        <div className="w-full p-6 md:p-10 border border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center text-lg   text-black">
            <div className="mb-6 md:mb-0">
              <FontAwesomeIcon
                className="text-4xl pt-1 text-red-500"
                icon={icon({ name: 'phone-volume' })}
              />
              <br />
              Call us
              <br />
              <p className=" "> <a href="tel:+2348185276036">+2348185276036</a></p>
            </div>
            <div className="border-t border-b md:border-0 border-gray-300 md:border-l md:border-r-0">
              <MailFilled className="text-4xl text-yellow-500" />
              <br />
              Write to us
              <br />
              <p className=""><a href="mailto:example@example.com">ebukasam108@gmail.com</a></p>
            </div>
            <div className="border-t md:border-t-0 border-gray-300 md:border-l">
              <HomeFilled className="text-4xl text-green-500" />
              <br />
              Address
              <br />
              <p className=""><a href="https://www.google.com/maps/search/UNN,+Nsukka,+Enugu">UNN, Nsukka, Enugu</a></p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 text-xl text-black pt-16 md:pt-20 font-bold">
          <div className="mb-10 md:mb-0">
            <div className="text-start">
              Travel
              <p className="text-lg font-thin pt-2 text-black">
              Explore the world with LeTour – your ultimate travel companion. 
              Find the best places to eat, stay, and experience the local culture.
               Discover hidden gems and create unforgettable memories. 
              </p>
              <div className="flex gap-3 pt-3 text-4xl text-black hover:text-white">
                <FacebookFilled  className='hover:text-white'/>
                <TwitterSquareFilled />
                <InstagramFilled />
                <LinkedinFilled />
              </div>
            </div>
          </div>
          <div className="mb-10 md:mb-0">
            <div className="text-start ml-10">
              Quick Links
              <div className="text-lg font-thin pt-2 text-black">
                <ul className="list-none">
                  <li onClick={aboutPage} className="flex cursor-pointer items-center">
                    <span  className="bg-red-500  rounded-full w-3 h-3 mr-2"></span>
                    About
                  </li>
                  <li onClick={tourPage} className="flex items-center cursor-pointer">
                    <span className="bg-yellow-500 rounded-full w-3 h-3 mr-2"></span>
                    Tour
                  </li>
                  <li onClick={blogPage} className="flex cursor-pointer items-center">
                    <span className="bg-green-500 rounded-full  w-3 h-3 mr-2"></span>
                    Blog
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-start">
            Subscribe
            <p className="text-lg font-thin pt-2 text-black">
              Sign up for our monthly blogletter to stay informed about travel
              and tours
            </p>
            <div className="w-full h-16 bg-blue-100 mt-6">
              <div className="flex items-center pt-2 px-2 font-light text-lg">
                <input
                  className="w-full h-12 bg-blue-100 text-black focus:outline-none"
                  type="text"
                  id="subscribe"
                  name="subscribe"
                  placeholder="Email Address"
                />
                <button className="bg-black text-white w-2/5 h-12 flex items-center justify-center">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mt-20 md:mt-36" />
        <p className="py-6 text-black">
          2023 <span className="">&#167;noskinpain.</span> All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
