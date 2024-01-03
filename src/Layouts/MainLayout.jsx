import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { useState } from "react";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  
   

  return (

    <div className="flex gap-5 ">
      <div className={`${isOpen ? "" : "hidden"} ${location.pathname == '/' ? '':'lg:block'} `}>
        <Navbar setIsOpen={setIsOpen}></Navbar>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-0 w-screen shadow-lg  bg-white p-4 z-[998]"
      >
        <svg
          width={40}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Menu / Menu_Alt_03">
              <path
                id="Vector1"
                d="M5 17H13"
                stroke="#0095FF" // Red
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                id="Vector2"
                d="M5 12H19"
                stroke="#000000" // Green
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                id="Vector3"
                d="M5 7H13"
                stroke="#0095FF" // Blue
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`w-full  my-20 mx-auto ${
          isOpen ? "opacity-30 duration-500" : "duration-500 opacity-100"
        } lg:opacity-100  `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
