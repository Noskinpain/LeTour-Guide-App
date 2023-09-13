import React from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom';

const LetourChat = () => {

    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/Login" />;
      }
    
  return (
    <>
    <div className=''>
    <div className='text-center text-4xl pt-5 fixed z-10 font-bold font-sans h-20 flex contents-center justify-center
     w-full bg-blue-100 text-black'>LeTour chat</div>
    <ChatBox/>
    <SendMessage/>
    </div>
    </>
  )
}

export default LetourChat