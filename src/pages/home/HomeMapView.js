import React from 'react'
import  {useNavigate} from "react-router-dom"

const MapView = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/MapView");
  }
  return (
    <>
    <div className='bg-center mt-20 bg-cover pl-36 pt-32 object-cover w-full h-[450px] sm:h-400' style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2013/06/20/13/52/world-140304_1280.jpg")`}}>
    <h1 className='text-white  text-4xl'>Here at LeTour,<br/> We got you covered.<br/><span className='text-xl'>Navigate to Map View for scalar screen</span></h1>
    <button onClick={handleClick} className='w-56 h-12 mt-4 bg-blue-800 text-white hover:bg-blue-900'>Map View</button>

    </div>
    
    
    
    
    
    </>
  )
}

export default MapView