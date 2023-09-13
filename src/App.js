import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/index"
import './index.css'
import Notfoundpage from "./pages/notfoundpage/NotFoundPage"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LoginPage from './pages/login/Login'
import SignupPage from './pages/signup/Registration'
import MapView from './pages/viewmap/MapView'
import SearchResult from './pages/SearchResult'
import PlaceDetails from "./pages/templates/PlaceDetails"
import AttractionsList from './pages/AttractionsList'
import HotelsList from './pages/HotelsList'
import RestaurantsList from './pages/RestaurantsList'
import About from "./pages/About"
import Blog from "./pages/Blog"
import { AuthProvider } from './context/AuthContext'
import ForgotPassword from './pages/ForgotPassword'
import UpdateProfile from './pages/UpdateProfile'
import LetourChat from "./pages/letourchat/LetourChat"
import CalculateRoute from "./pages/CalculateRoute/CalculateRoute"
import ScrollToTop from './Components/onscroll/ScroolToTop'
import Tour from "./pages/Tour"


const App = () => {

  return (
    <>

      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/MapView" element={<MapView />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/attractions" element={<AttractionsList />} />
            <Route path="/hotels" element={<HotelsList />} />
            <Route path="/restaurants" element={<RestaurantsList />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Tour" element={<Tour />} />
            <Route path="/search/:type/:id" element={<PlaceDetails />}/>
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/letourChat" element={<LetourChat />} />
            <Route path="/CalculateRoute" element={<CalculateRoute/>} />
            <Route path="*" element={<Notfoundpage />} />
            <Route path="/scrollToTop" element={<ScrollToTop />} /> 
          </Routes>
          
        </AuthProvider>
      </Router>

    </>
  )
}

export default App