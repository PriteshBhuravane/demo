import React from 'react'

const LocationSearchPanel = (props) => {
    const locations = [
        "24B, Near Snehal Medical, Patil Hostel, Ratnagiri",
        "15A, Opposite City Mall, Shivaji Nagar, Pune",
        "78C, Near Lotus Hospital, MG Road, Mumbai",
        "22D, Beside Central Park, Viman Nagar, Pune",
        "10E, Next to Railway Station, Kolhapur"
      ];
  return (
    <div>
    {locations.map((location,index) => (
       
      <div key={index} onClick={() => {
        props.setVehiclePanel(true)
        props.setPanelOpen(false)
      }}
        className="flex gap-4 border-2 border-gray-200 active:border-black rounded-xl p-2 items-center my-2 justify-start cursor-pointer"
      >
        <h2 className="bg-[#eee] rounded-full h-8 w-12 flex items-center justify-center">
          <i className="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">{location}</h4>
      </div>
    ))}
  </div>
);
};

export default LocationSearchPanel;