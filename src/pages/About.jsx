import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const About = () => {

  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Login" />;
  }
  
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="container mx-auto px-4 md:px-20 pt-16">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-black text-xl">
            Welcome to our tourist guide application! We are dedicated to helping you discover the best attractions, hotels, and restaurants in various destinations around the world.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            Our mission is to provide you with valuable information, reviews, and recommendations to make your travel experiences memorable and enjoyable.
          </p>
          <p className="text-gray-700 mt-4 text-lg">
            Whether you're an adventure seeker, a food lover, or a history enthusiast, our application has something for everyone. Explore our curated lists of top places and plan your next trip with confidence.
          </p>
        </div>
        <h2 className="text-4xl text-blue-800 font-semibold p-6 mt-6 mb-2">Our Team</h2>
        <p className="text-gray-700 text-lg shadow-md p-6">
          Behind the scenes, we have a passionate team of travel experts, photographers, and writers who work tirelessly to bring you the latest and most accurate information about your favorite destinations. Our team's diverse backgrounds and experiences ensure that we cater to the interests of all types of travelers.
        </p>
        <h2 className="text-4xl p-6 text-blue-800 font-semibold mt-6 mb-2">Explore and Discover</h2>
        <p className="text-gray-700 p-6 text-lg shadow-md">
          With our user-friendly interface, you can easily browse through various categories, filter by your preferences, and read detailed reviews to make informed decisions. Whether you're looking for a cozy bed and breakfast, a thrilling adventure activity, or a hidden gem that only the locals know about, we've got you covered.
        </p>
        <p className="text-black p-6 text-xl shadow-md mt-5">
          Planning your next vacation has never been easier. Simply search for your destination, explore the options, and create your own personalized itinerary. Say goodbye to hours of research and guesswork – our platform is designed to simplify your travel planning process.
        </p>
        <h2 className="text-4xl font-semibold mt-6 mb-2 p-6 text-blue-800">Connect with Us</h2>
        <p className="text-gray-700 text-lg shadow-md p-6">
          We love hearing from our users! Connect with us on social media to stay updated with the latest travel trends, tips, and exclusive offers. Join our community of travel enthusiasts and share your own experiences, recommendations, and photos. We believe that the best travel advice comes from fellow travelers, and we're excited to have you be part of our journey.
        </p>
        <h2 className="text-4xl p-6 font-semibold mt-6 mb-2 text-blue-800">Support and Assistance</h2>
        <p className="text-gray-700 shadow-md text-lg p-6">
          Your satisfaction is our top priority. If you have any questions, concerns, or need assistance while using our application, our dedicated support team is ready to help. Contact us via email, phone, or through our website, and we'll get back to you as soon as possible. We're here to ensure that your travel planning experience is smooth and enjoyable.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-800 p-6">Start Your Journey</h2>
        <p className="text-gray-700 mb-20 shadow-md text-lg p-6">
          Whether you're a seasoned traveler or new to exploring, our tourist guide application is your companion for every adventure. Embark on a journey of discovery, create unforgettable memories, and let us be part of your travel story. Start planning your next getaway today and let the world be your playground!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
