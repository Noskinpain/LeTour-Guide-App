import React, { useEffect } from 'react'

import Topcities from "./Topcities";
import AOS from "aos"
import "aos/dist/aos.css"
import Homeslide from './Homeslide';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer';
import Todo from "./Todo"
import HomeMessage from './HomeMessage';
import Discover from './Discover';
import ViewTrips from "./ViewTrips"
import MiniContent from './MiniContent';
import TrendingTours from './TrendingTours';
import StoriesAndTips from './StoriesAndTips';
import Subscribe from './Subscribe';
import Reviews from "./Reviews"
import ToStay from "../../Components/ToStay"
import ToEat from "../../Components/ToEat"
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Login" />
  }

  return (
    <div className='w-full' >
      <Navbar/>
      <Todo/>
      <HomeMessage/>
      <MiniContent/>
      <Homeslide />
      {/* <ToVisit/> */}
      <TrendingTours/>
      <Topcities />
      <Discover/>
   
      <ToStay/>
       <ToEat/>
       
       <ViewTrips/>
       <StoriesAndTips/>
       <Subscribe/>
       <Reviews/>
      <Footer />
    </div>
  )
}

export default Home