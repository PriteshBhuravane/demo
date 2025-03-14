import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import car from '../assets/car1.png'
import logo from '../assets/quickride_driver_logo.png'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)



  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className=" h-screen">
        <div className='fixed p-3 flex top-0 justify-between items-center w-full'>
          <img className=' w-16' src={logo} alt="" />
          <Link to='/home' className="  flex h-10 w-10 bg-white rounded-full items-center justify-center">
        <i className=" font-medium text-lg ri-logout-box-r-line"></i>
        </Link>
        </div>
      <div className=" h-3/5">
      
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Logo"
          className=" h-full w-full object-cover"
        />
      </div>
      <div className=" h-2/5 p-4">
        <CaptainDetails/>
        
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-8 -translate-y-full bg-white pt-8"
      >
          <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className=" h-screen fixed w-full z-10 bottom-0 px-3 py-8 -translate-y-full bg-white pt-8"
      >
          <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome