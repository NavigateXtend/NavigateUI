import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';
import ReactGA4 from 'react-ga4';

const TRACKING_ID = 'G-06XXTXVLLF'; // YOUR_OWN_TRACKING_ID
ReactGA4.initialize(TRACKING_ID); // Replace with your Measurement ID

const API_TOKEN = '1939Tfj40pdfX59SEOMHMXfh'; // Replace with your actual token
const ANALYTICS_ENDPOINT = 'https://api.vercel.com/v12/analytics/projects/prj_Fz98ud2fkRVpT0Jv0fslhJPD8Ppn/visitors'; // Replace with your project ID

axios
    .get(ANALYTICS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        }
    })
    .then((response) => {
        const totalVisitors = response.data.total; // Assuming the response structure
        // Display totalVisitors in your UI element (e.g., using React, Vue, or plain JavaScript)
        console.log(totalVisitors);
    })
    .catch((error) => {
        // Handle errors gracefully
        console.log('error: ' + error);
    });

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="flex gap-5">
            <div className={`${isOpen ? '' : 'hidden'} ${location.pathname == '/' ? '' : 'lg:block'} `}>
                <Navbar setIsOpen={setIsOpen}></Navbar>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="fixed flex items-center justify-between top-0 w-screen shadow-md bg-white p-4 z-[98]">
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
                <div className="w-[70%] flex items-center gap-4">
                    <h1 className="text-xl">
                        <span className="text-[#0d87f8]">W</span>elcome Back
                    </h1>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`w-full lg:w-[70%]  overflow-x-hidden my-20 mx-auto ${isOpen ? 'opacity-30 duration-500' : 'duration-500 opacity-100'} lg:opacity-100`}>
                <Outlet />

                <Analytics />
            </div>
        </div>
    );
};

export default MainLayout;
