import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center justify-start gap-3">
            <img className=" h-10 w-10 rounded-full object-cover" src="data:image/jpeg;base64,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" alt="" />
            <h4 className=" text-lg font-medium">Pritesh Bhuravane</h4>
          </div>
          <div>
            <h4 className=" text-xl font-semibold">₹ 295.20</h4>
            <p className=" text-sm font-medium tex3-g mb-2ray-600">Earned</p>
          </div>
        </div>
        <div className=" flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-4 items-start">
            <div className=" text-center">
              <i className=" text-3xl mb-2 font-thin  ri-timer-line"></i>
              <h5 className=" text-lg font-medium">10.2</h5>
              <p className=" text-sm text-gray-600">Hourse Online</p>
            </div>
            <div className=" text-center">
              <i className=" text-3xl mb-2 font-thin  ri-speed-up-fill"></i>
              <h5 className=" text-lg font-medium">10.2</h5>
              <p className=" text-sm text-gray-600">Hourse Online</p>
            </div>
            <div className=" text-center">
              <i className=" text-3xl mb-2 font-thin  ri-booklet-line"></i>
              <h5 className=" text-lg font-medium">10.2</h5>
              <p className=" text-sm text-gray-600">Hourse Online</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails