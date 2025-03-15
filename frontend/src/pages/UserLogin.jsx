import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {UserDataContext} from '../context/UserContext'
import { Navigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const {user, setUser} =useContext(UserDataContext)
  const navigate=useNavigate()

  const submitHandler =async (e) => {
    e.preventDefault()
    const userData={
      email: email,
      password: password
    }
    const response = await axios.post(`https://demo-dc75.onrender.com/users/login`, userData)

    if(response.status === 200){
     const data= response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src={logo} alt="Logo" className='w-24 h-12 mb-4'/>
      <form onSubmit={(e)=> submitHandler(e)} >
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder="Email" />

        <h3 className='text-lg font-medium mb-2'>Enter Your Password</h3>
        <input  
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
         required type="password" placeholder="Password" />
          <button  className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base' >Log In</button>
         
      </form>
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
