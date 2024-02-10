import Navbar from '../Nav/Navbar';
import { useState } from 'react';
import Banner from './Banner/Banner';
// import WhyNavigate from './WhyNavigate/WhyNavigate';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                background: `radial-gradient(at 18% 99%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, 
        radial-gradient(at 97% 8%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, 
        radial-gradient(at 79% 82%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        radial-gradient(at 96% 10%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,    
        radial-gradient(at 42% 20%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%,
        radial-gradient(at 4% 49%, #0f172a 0px, transparent 50%) repeat scroll 0% 0%, #0384C6 radial-gradient(at 57% 33%, #0384C6 0px, #0f172a 50%) repeat scroll 0% 0%`,
                backgroundAttachment: 'fixed'
            }}
            className="flex gap-5 min-h-[100vh]"
        >
            <div className={` ${isOpen ? 'fixed z-[999]' : 'hidden'} `}>
                <Navbar setIsOpen={setIsOpen}></Navbar>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="fixed top-0 z-[998] flex w-screen gap-5 bg-slate-900 p-4">
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
                <div className="">
                    <h1 className="flex text-3xl  text-[#727d95]">
                        <img className="max-w-[45px]" src="/assets/Logo.png" alt="" />
                        <span className="text-[#38BDF8]">N</span>avigate <span className="text-[#38BDF8]">U</span>I
                    </h1>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`mx-auto  my-10 w-full ${isOpen ? 'opacity-30 duration-500' : 'opacity-100 duration-500'} lg:opacity-100`}>
                <Banner isOpen={isOpen}></Banner>
                {/* <WhyNavigate isOpen={isOpen}></WhyNavigate> */}
            </div>
        </div>
    );
};

export default Home;
