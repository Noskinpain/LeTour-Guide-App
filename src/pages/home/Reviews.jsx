import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import React Slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import React Slick theme styles
import { hotelData } from "../../data/storiesData";
import { Left, Right } from "../../Components/ui/Arrow";
import { ImLocation2 } from "react-icons/im";
import { FaStar } from "react-icons/fa"
import { db } from '../../config/firebase';
import { collection, getDocs, addDoc } from "firebase/firestore"


const Reviews = () => {
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
          slidesToScroll: 1,
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

  // const [value, setValue] = useState('');
  const [users, setUsers] = useState([])

  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newReview, setNewReview] = useState("")
  const [newRating, setNewRating] = useState(0)

  const usersColectionRef = collection(db, "userdetailsreview")

  const createUser = async () => {
    await addDoc(usersColectionRef, { name: newName, email: newEmail, review: newReview, rating: newRating })


  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersColectionRef)
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    }
    getUsers()
  }, [])

  const handleInputChange = (e) => {
    const newRating = e.target.value;
    if (/^[1-5]$/.test(newRating) || newRating === '') {
      setNewRating(newRating);
    }
  };

  return (
    <>
      <div className='px-4 sm:px-24 mt-10 sm:mt-24 mb-10 font-serif'>
        <p
          className="tracking-widest md:text-3xl text-2xl text-blue-800 pb-2"
        >
          Testimonials
        </p>
        <h1
          className='text-lg font-medium md:text-27'
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
          <Slider {...settings}>
            {users.map((user, index) => (
              <div key={index} className='w-full '>
                <div className='flex justify-around'>
                  <div className='h-96  border w-11/12 shadow-md  rounded-lg bg-[papayawhip]'>
                    <div className='text-center px-2'>
                      <p className='text-8xl pt-2 text-black'>"</p>
                      <h1 className='text-xl text-black font-bold'>{user.name}</h1>

                      <p className='text-black pt-2 text-lg px-2 font-serif '> {user.review}</p>

                      <p className='pt-2 flex justify-center text-3xl'>
                        {[...Array(5)].map((star, i) => (
                          <div className="">
                            <FaStar
                              key={i}
                              className={i < user.rating ? 'text-yellow-500 hover:brightness-125' : 'text-gray-300'}
                            />
                          </div>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
      <div className=' md:px-20 px-4 py-20 font-serif'>
        <h1 className='text-2xl pb-5'>LEAVE A REVIEW</h1>
        <p className='text-lg'>Your email address will not be published</p>


        <div className='flex justify-between w-5/5 md:w-4/5 gap-10 pt-5'>


          <div className='w-full '>
            <label htmlFor="name">NAME:</label><br />
            <input type='text' placeholder='Your name*'
              onChange={(e) => { setNewName(e.target.value) }}
              className='w-full h-14 rounded-lg pl-3 mt-2 border border-gray-300 shadow-xl' />
          </div>


          <div className='w-full'>
            <label htmlFor="email">EMAIL:</label><br />
            <input type='email' placeholder='Your email*'
              onChange={(e) => { setNewEmail(e.target.value) }}
              className='w-full h-14 rounded-lg pl-3 mt-2 border border-gray-300 shadow-xl' />
          </div>
        </div>


        <div className='mt-10'>
          <label htmlFor="review">YOUR REVIEW:</label><br />
          <textarea placeholder="Message"
            onChange={(e) => { setNewReview(e.target.value) }}
            maxLength="250"
            className='w-full md:w-4/5 h-56  pl-5 pt-5 mt-2 rounded-lg  border border-gray-300 shadow-xl' />
        </div>


        <div className="mt-10 w-56 md:w-72">
          <label htmlFor="rating">GIVE YOUR RATING ON SCALE OF (1-5):</label><br />
          <input
            className='w-full h-14 rounded-lg pl-3 mt-2  border border-gray-300 shadow-xl'
            type="text"
            id="rating"
            value={newRating}
            onChange={handleInputChange}

            maxLength={1}
          />
        </div>
        <button
          id="go"
          className='w-96 md:w-full h-12 lg:h-14 lg:w-36 mt-10 md:mt-3'
          onClick={createUser}
        >
          ADD REVIEW
        </button>

      </div>
    </>
  );
};

export default Reviews;
