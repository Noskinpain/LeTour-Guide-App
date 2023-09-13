import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../config/firebase"
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}
export  function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
}

function login(email, password){
 return  signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle =  () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}

function logout(){
  return signOut(auth)
}

function resetPassword(email){
  return sendPasswordResetEmail(auth, email)
}

useEffect(() => {
 const unsubscribe =  auth.onAuthStateChanged(user => {
  setCurrentUser(user) 
  setLoading(false)
  
  })

  return unsubscribe
}, [])


  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    signInWithGoogle
  }
  return (
    <AuthContext.Provider value={value}>
     
    {!loading && children}
    </AuthContext.Provider>
  )
}
