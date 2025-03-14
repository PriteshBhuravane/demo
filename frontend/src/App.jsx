import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import Home from './pages/Home'
import UserContext from './context/UserContext'
import UserProtecteWrapper from './pages/UserProtecteWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Ridding from './pages/Ridding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div >
      <UserContext>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/riding" element={<Ridding/>} />
        <Route path="/captain-riding" element={<CaptainRiding/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path="/home" element={<UserProtecteWrapper><Home/></UserProtecteWrapper>} />
        <Route path="/user/logout" element={<UserProtecteWrapper><UserLogout/></UserProtecteWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
        <Route path='/captain/logout' element={<CaptainProtectWrapper><CaptainLogout/></CaptainProtectWrapper>} />
      </Routes>
      </UserContext>
    </div>
  )
}

export default App