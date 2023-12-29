import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDocOpen, setDocIsOpen] = useState(false);

  return (
    <>
      <div className="border-2 sticky top-0 w-[25%] h-screen overflow-hidden select-none">
        <div className="flex flex-col  w-full h-full group space-y-6">
          <div>
            <h1 className="text-3xl p-8 text-gray-800">
              <span className="text-[#0095FF]">U</span>nifyUI
            </h1>
            <hr />
          </div>
          {/* container   */}
          <div className="flex flex-col text-lg text-gray-600 font-sans px-4 duration-300 ">
            <div
              onClick={() => setDocIsOpen(!isDocOpen)}
              className="py-2  flex items-center justify-between px-6 hover:bg-gray-200 rounded-lg "
            >
              <div className="flex items-center gap-2">
                <svg
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#0095FF]"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                      stroke="currentColor"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <span>Docs</span>
              </div>
              <svg
                className={`${
                  isDocOpen ? "duration-300 " : "-rotate-180 duration-300 "
                }`}
                width={35}
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
                  {" "}
                  <path
                    d="M7 14.5L12 9.5L14.5 12L17 14.5"
                    stroke="#0095FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M7 14.5L12 9.5L14.5 12"
                    stroke="#363853"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            {/* doc div  */}
            <div
              className={` ${
                isDocOpen
                  ? "h-full w-full visible navVisible"
                  : "h-0 w-0 invisible"
              } flex flex-col ml-8 text-lg space-y-2 border-l my-2 px-2 `}
            >
              <Link
                className="hover:bg-gray-200 py-2 duration-700  px-6 hover:rounded-lg "
                to="/"
              >
                home
              </Link>
              <Link
                className="hover:bg-gray-200 py-2 duration-300  px-6 hover:rounded-lg "
                to="button"
              >
                Button
              </Link>
            </div>
            <Link className="py-2 px-10 hover:bg-gray-200" to="button">
              Button
            </Link>
            <Link className="py-2 px-10 hover:bg-gray-200" to="slider">
              Slider
            </Link>
            <Link className="py-2 px-10 hover:bg-gray-200" to="card">
              Card
            </Link>
            <Link className="py-2 px-10 hover:bg-gray-200" to="form">
              Form
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
