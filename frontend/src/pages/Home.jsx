import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LokingForDriver from "../components/LokingForDriver";
import WaitForDriver from "../components/WaitForDriver";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmeRidePanel, setConfirmeRidePanel] = useState(false)
  const confirmeRidePanelRef = useRef(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "75%",
          padding: 20,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmeRidePanel) {
        gsap.to(confirmeRidePanelRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(confirmeRidePanelRef.current, {
          translateY: "100%",
        });
      }
    },
    [confirmeRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          translateY: "100%",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          translateY: 0,
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          translateY: "100%",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img src={logo} alt="Logo" className="w-16 absolute left-5 top-5" />
      <div className=" h-screen w-screen">
        {/* image for temporary use */}
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Logo"
          className=" h-full w-full object-cover"
        />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[25%] bg-white p-5 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className=" opacity-0 top-0 right-2 absolute text-2xl "
          >
            <i className="ri-arrow-down-wide-line "></i>
          </h5>
          <h4 className=" text-2xl font-semibold">Find a Trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            {/* Vertical Line */}
            <div className="absolute left-8 top-[85px] h-[50px] w-1 bg-gray-900 rounded-full"></div>
            {/* Circles at both ends */}
            <div className="absolute left-7 top-[80px] w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute left-7 top-[130px] w-3 h-3 bg-black rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className=" bg-[#eee] px-9 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className=" bg-[#eee] px-9 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Drop-off location"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-8 translate-y-full bg-white pt-8"
      >
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmeRidePanel={setConfirmeRidePanel} />
      </div>
      <div
        ref={confirmeRidePanelRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white pt-8"
      >
        <ConfirmedRide setConfirmeRidePanel={setConfirmeRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white pt-8"
      >
        <LokingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 px-3 py-6  bg-white pt-8"
      >
        <WaitForDriver waitingForDriver={waitingForDriver}  />
      </div>
      
    </div>
  );
};

export default Home;
