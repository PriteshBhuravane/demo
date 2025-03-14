import React from 'react'
import car from '../assets/car1.png'

const LokingForDriver = (props) => {
  return (
    <div>
    <h5
      onClick={()=>{
        props.setVehicleFound(false)
      }}
      className="  top-0 right-2 absolute text-2xl "
    >
      <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line "></i>
    </h5>
    <h3 className="text-xl font-semibold mb-5">Lokking for Driver</h3>

    <div className=" flex justify-between flex-col items-center gap-2">
      <img className=" h-20 " src={car} alt="" />
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
      
    
    </div>
  </div>
  )
}

export default LokingForDriver