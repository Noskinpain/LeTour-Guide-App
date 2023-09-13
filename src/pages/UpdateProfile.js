import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function   () {

    const { currentUser } = useAuth();

    if (!currentUser) {
      return <Navigate to="/Login" />;
    }

    
    
  return (
    <div>  </div>
  )
}
