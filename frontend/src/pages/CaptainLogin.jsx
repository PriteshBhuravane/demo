import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/quickride_driver_logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const Captainlogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post("https://demo-dc75.onrender.com/captains/login", captain);


    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3 h-12' src={logo} alt="Uber Driver" />

        <form onSubmit={(e)=> submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
          required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg'
          >Login</button>
        </form>
        
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      
      <div>
        <Link
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg'
        >Sign in as User</Link>
      </div>
    </div>
  );
};

export default Captainlogin;
