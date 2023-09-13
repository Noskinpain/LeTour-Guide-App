import React, {useState, useRef} from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate} from 'react-router-dom';
import { auth, googleProvider} from "../../config/firebase"
// import cookies from "universal-cookie"
import { useAuth } from '../../context/AuthContext';
// import { Alert } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    
     const [error, setError] = useState("")
     const [loading, setLoading]= useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()

    const navigate = useNavigate()


  async function HandleSubmit(e){
    e.preventDefault()
  
     try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
     } catch(err){
      setError("Failed to sign in")
      
     }

    setLoading(false)
  }
  
   
  return (
    <>
   
      <div className="flex w-full h-screen ">
    
     
      <div className='bg-white w-full md:w-3/5 flex flex-col justify-center md:px-0
       items-center px-4 p-0'>
        <h1 className='text-4xl text-blue-800 font-bold mt-5'>Login</h1>
        <p className='text-blue-800 pt-2 text-sm'>Embark on Memorable Tours Across the world </p>
        {/* {currentUser.email} */}
        {error && <div className="bg-red-500 w-full md:w-[500px] h-12 justify-center 
        font-bold my-4 flex items-center text-white">{error}</div>}
        <form onSubmit={HandleSubmit}>
        <div className='flex flex-col gap-3'>
          <label className='text-xl md:mt-0 mt-2 text-black'>Email</label>
          <input type="email"
           placeholder="e.g example123@example.com"
           
           required
           ref={emailRef}
            className='text-black  w-[380px] md:w-[500px] border-blue-800 text-lg pl-2 h-12 border rounded-xl  bg-transparent' />
          
          <label className='text-xl text-black'>Password</label>
          <input type="password"
           placeholder="*********"
           ref={passwordRef}
            className='text-black w-[380px] md:w-[500px] border-blue-800 text-lg pl-2 h-12 border rounded-xl  bg-transparent' />
          
          
          <button disabled={loading} type='submit' className='w-[300] md:w-[500px] hover:bg-gray-900 h-12 bg-black text-white text-lg rounded-xl mt-6'>
            Login</button>
        </div>
        </form>
        <div className='flex w-[380px] md:w-[500px] justify-between items-center text-lg pt-4 pb-4'>
        <p className='  text-blue-800 text-sm md:text-lg'>Don't have an account?
         <span className='cursor-pointer text-black'><Link to="/SIgnup"> Register</Link></span></p>
         <p className='cursor-pointer text-sm md:text-lg text-red-500 hover:text-red-700 underline'>
          <Link to= "/forgotPassword" >forgot password</Link></p>
         </div>
       
        <p  className='mt-0 text-lg text-black hover:bg-blue-950 w-[380px] md:w-[500px] 
         h-14 flex justify-center items-center cursor-pointer hover:rounded-xl'>
           <FcGoogle className='text-2xl'/>&nbsp;&nbsp;Sign Up With Google</p>
    
      </div>
      <div className="w-2/5 bg-center bg-cover object-cover h-full md:block hidden"
      style={{backgroundImage: `url("https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg")`}}>
      </div>
      </div>

   

    </>
  )
}

export default Login