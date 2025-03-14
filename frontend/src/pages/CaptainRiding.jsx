import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/quickride_driver_logo.png'
import ClipLoader from "react-spinners/ClipLoader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from '../components/FinishRide';


const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className=" h-screen relative">
       
        <div className='fixed p-3 flex top-0 justify-between items-center w-full'>
          <img className=' w-16' src={logo} alt="" />
          <Link to='/home' className="  flex h-10 w-10 bg-white rounded-full items-center justify-center">
        <i className=" font-medium text-lg ri-logout-box-r-line"></i>
        </Link>
        </div>
      <div className=" h-4/5">
      
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Logo"
          className=" h-full w-full object-cover"
        />
      </div>
      <div className=" h-1/5 p-6 relative bg-yellow-400 flex justify-between items-center pt-10" 
      onClick={()=>{
        setFinishRidePanel(true)
      }}>
      <h5
            onClick={() => {
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
            }}
            className=" p-1 text-center w-[95%] absolute top-0 "
          >
            <i className=" text-2xl text-gray-900 ri-arrow-up-wide-line "></i>
          </h5>
        <h4 className=' text-xl font-semibold'>4 KM away</h4>
        <button className='  bg-green-600 font-semibold text-white p-3 px-10 rounded-lg '>Complete Ride</button>
        
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-8 -translate-y-full bg-white pt-8"
      >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding