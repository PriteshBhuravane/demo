import React from 'react'
import car from '../assets/car1.png'

const WaitForDriver = (props) => {
  return (
    <div>
        <h5
          onClick={()=>{
            props.waitingForDriver(false)
          }}
          className="  top-0 right-2 absolute text-2xl "
        >
          <i className=" text-2xl text-gray-600 ri-arrow-down-wide-line "></i>
        </h5>
       <div className=' flex items-center justify-between'>
         <img className=" h-12" src={car} alt="" />
         <div className=' text-right'>
            <h2 className=' text-lg font-medium'>Pritesh Bhuravane</h2>
            <h4 className=' text-xl font-semibold -mt-1 -mb-1'>MH08AN7764</h4>
            <p className=' text-sm text-gray-600'>White Maruti Suzuki Alto</p>
         </div>
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
          
        
        </div>
      </div>
  )
}

export default WaitForDriver