import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar';

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="flex gap-5">
            <div className={`${isOpen ? '' : 'hidden'} ${location.pathname == '/' ? '' : 'lg:block'} `}>
                <Navbar setIsOpen={setIsOpen}></Navbar>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="fixed top-0 z-[998] flex w-screen items-center justify-between  bg-white p-4 shadow-lg">
                <span className="w-[30%]">
                    <svg width={40} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
                </span>
                <div className="flex w-[70%] items-center gap-4">
                    <h1 className="text-xl">
                        <span className="text-[#0d87f8]">W</span>elcome Back
                    </h1>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`mx-auto my-20 w-full overflow-x-hidden lg:w-[70%] ${isOpen ? 'opacity-30 duration-500' : 'opacity-100 duration-500'} lg:opacity-100`}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
