import React, {useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Notfoundpage = () => {
  
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/'); 
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-700">Oops! The page you're looking for does not exist.</p>
        <p className="text-gray-600 mt-2">Please check the URL or navigate back to the homepage.</p>
        <button onClick={handleButtonClick} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go to Homepage
        </button>
      </div>
    </div>
  )
}

export default Notfoundpage