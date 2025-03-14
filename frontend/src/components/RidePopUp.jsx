import React from 'react'
import car from "../assets/car1.png";

const RidePopUp = (props) => {
  return (
    <div>
        <h5
                onClick={() => {
                    props.setRidePopupPanel(false)
                }}
                className="  top-0 right-2 absolute text-2xl "
              >
                <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line "></i>
              </h5>
              <h3 className="text-xl font-semibold mb-5">New Ride Available !</h3>
              <div className=' flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg  '>
                <div className=' flex items-center gap-3 '>
                    <img className=' w-12 h-12 rounded-full object-cover' src="data:image/jpeg;base64,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" alt="" />
                    <h2 className=' text-lg font-medium'>Samiksha Bhuravane</h2>
                </div>
                <h5 className=' text-lg font-semibold'>2.2 KM</h5>
              </div>
        
              <div className=" flex justify-between flex-col items-center gap-2">
               
                <div className=" w-full mt-5">
                  <div className=" flex items-center gap-5 p-3 border-b-1 border-gray-400 ">
                    <i className=" text-xl ri-map-pin-fill"></i>
                    <div>
                      <h3 className=" text-lg font-medium">562/11-A</h3>
                      <p className=" text-sm -mt-1 text-gray-600">
                        Finolex Colony, Ratnagiri
                      </p>
                    </div>
                  </div>
                  
                  <div className=" flex items-center gap-5 p-3 border-b-1 border-gray-400 ">
                  <i className=" text-xl ri-map-pin-user-fill"></i>
                    <div>
                      <h3 className=" text-lg font-medium">562/11-A</h3>
                      <p className=" text-sm -mt-1 text-gray-600">
                        Finolex Colony, Ratnagiri
                      </p>
                    </div>
                  </div>
                  
                  <div className=" flex items-center gap-5 p-3  ">
                  <i className=" text-xl ri-money-rupee-circle-fill"></i>
                    <div>
                      <h3 className=" text-lg font-medium">₹ 193.20</h3>
                      <p className=" text-sm -mt-1 text-gray-600">
                        Cash Cash
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className=' flex justify-between items-center mt-5 w-full'>
                <button onClick={() => {
                    props.setRidePopupPanel(false)
                }} className="  bg-gray-300  font-semibold text-gray-900 p-3 px-10 rounded-lg ">Ignore</button>
                <button 
                onClick={()=>{
                    props.setRidePopupPanel(false);
                    props.setConfirmRidePopupPanel(true)
                    
                }
                }
                 className="  bg-green-600 font-semibold text-white p-3 px-10 rounded-lg ">
                  Accept
                </button>
               
                </div>
              </div>
    </div>
  )
}

export default RidePopUp