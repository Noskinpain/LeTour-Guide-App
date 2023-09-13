import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import WhereTo from "../../Components/WhereTo"


const Todo = () => {
   const navigate = useNavigate()
  const handleClick = () => {
     navigate("/index")
  }

  

  const MapViewHandleClick = () => {
    navigate("/MapView");
  }

//   const [toggle, setToggle] = useState({
//     toGo: true, // Place to Go state, active by defaul
//     toDo: false, //Things to Do state
//     toStay: false //Places to staty
// })

  return (
    <div className=''>
        <div className='md:px-36 px-4 pt-10 pb-10 md:pb-14 z-0'>
        <h1 className='text-4xl text-blue-900 leading-tight tracking-wide '>
          Le<span className='text-red-600'>T</span>our Guide <br/><span className='text-black text-3xl md:text-4xl font-[300] pb-10'>
            The best free tour guides in the world are here:</span></h1>
        
        <WhereTo/>
      </div>
    <div className='grid  px-6 hover:cursor-pointer  md:px-20 h-24 mb-20 lg:px-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 w-full items-center' >
      <Link to={"/attractions"}>
    <div className='border border-blue-800 rounded-xl p-4 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      Things to Do
    </div>
    </Link>
    <Link to={"/hotels"}>
    <div className='border border-blue-800 rounded-xl p-4 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      Hotels
    </div>
    </Link>
    <Link to={"/restaurants"}>
    <div onClick={handleClick} className='border border-blue-800 rounded-xl p-4 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      Restaurants
    </div>
    </Link>
   
    <Link to= {"/Blog"}>
    <div className='border border-blue-800 rounded-xl p-4 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      Blog
    </div>
    </Link>
    <Link to= {"/letourChat"}>
    <div className='border border-blue-800 rounded-xl p-4 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      LeTour chat
    </div>
    </Link>
    <Link to= {"/CalculateRoute"}>
    <div className='border border-blue-800 rounded-xl p-4 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      Calculate Route
    </div>
    </Link>
    <div onClick={MapViewHandleClick} className='border border-blue-800 rounded-xl p-4 hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 h-12 sm:h-24 flex items-center'>
      Map View
    </div>
  </div>
  </div>
  )
}

export default Todo