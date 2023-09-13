import React, {useState, useRef} from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { auth, googleProvider} from "../config/firebase"
// import cookies from "universal-cookie"
import { useAuth } from "../context/AuthContext"


const ForgotPassword= () => {
    
     const [error, setError] = useState("")
     const [loading, setLoading]= useState(false)
     const [message, setMessage] = useState("")
    const emailRef = useRef()
    const {resetPassword} = useAuth()

    


  async function HandleSubmit(e){
    e.preventDefault()
  
     try{
        setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your indox for further instructions")
     } catch(err){
      setError("Failed to reset password")
      
     }

    setLoading(false)
  }
  
   
  return (
    <>
   
      <div className="flex w-full h-screen ">
    
     
      <div className='bg-white w-3/5  flex flex-col justify-center items-center m-0 p-0'>
        <h1 className='text-4xl text-blue-800 font-bold mt-5'>Password Reset</h1>
        <p className='text-blue-800 pt-2 text-sm'>Embark on Memorable Tours Across the world </p>
        {/* {currentUser.email} */}
        {error && <div className="bg-red-500 w-[500px] h-12 justify-center 
        font-bold my-4 flex items-center text-white">{error}</div>}
        {/* {currentUser.email} */}
        {message && <div className="bg-green-600 w-[500px] h-12 justify-center 
        font-bold my-4 flex items-center text-white">{message}</div>}
        <form onSubmit={HandleSubmit}>
        <div className='flex flex-col gap-3'>
          <label className='text-xl text-black'>Email</label>
          <input type="email"
           placeholder="e.g example123@example.com"
           
           required
           ref={emailRef}
            className='text-black w-[500px] border-blue-800 text-lg pl-2 h-12 border rounded-xl  bg-transparent' />
          
        
          
          
          <button disabled={loading} type='submit' className='w-[500px] hover:bg-gray-900 h-12 bg-black text-white text-lg rounded-xl mt-6'>
            Reset Password</button>
        </div>
        </form>
        <div className='flex w-[500px] justify-between items-center text-lg pt-4 pb-4'>
        <p className='  text-blue-800'>Don't have an account?
         <span className='cursor-pointer text-black'><Link to="/SIgnup"> Register</Link></span></p>
         <p className='cursor-pointer text-red-500 hover:text-red-700 underline'>
          <Link to= "/Login" >Login</Link></p>
         </div>
       
        <p  className='mt-0 text-lg text-black hover:bg-blue-950 w-[500px]  h-14 flex justify-center items-center cursor-pointer hover:rounded-xl'> <FcGoogle className='text-2xl'/>&nbsp;&nbsp;Sign Up With Google</p>
      {/* <button onClick={logout}>logout</button> */}
      </div>
      <div className="w-2/5 bg-center bg-cover object-cover h-full"
      style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg")`}}>
      </div>
      </div>

   

    </>
  )
}

export default ForgotPassword