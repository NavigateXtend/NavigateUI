import React from 'react';
import Image from 'next/image';

const ComponentBox = () => {
    return (
        <div className=" mx-auto max-w-[1200px] rounded-lg bg-slate-950 p-6 text-white">
            <h2 className="mb-4 text-3xl font-semibold text-gray-200">Some Awesome Components</h2>
            <p className="mb-6 text-base text-slate-400">Discover some of our best components below:</p>
            <div className="mt-10 flex flex-wrap items-center gap-10">
                {/* Avatar 1 */}
                <Image
                    width={60}
                    height={60}
                    className="h-[80px] w-[80px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt="avatar"
                />
                {/* Avatar 2 */}
                <div className="group relative">
                    <Image width={60} height={60} className="h-[80px] w-[80px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar" />
                    <span className="absolute bottom-2 right-0 h-4 w-4 rounded-full border-[3px] border-white bg-green-500"></span>
                    <span className="absolute bottom-2 right-0 h-4 w-4 animate-ping rounded-full bg-green-500"></span>
                </div>
                {/* Avatar 3 */}
                <div className="group relative">
                    <Image
                        width={60}
                        height={60}
                        className="h-[80px] w-[80px] rounded-full border-2 border-blue-300 bg-slate-500 object-cover"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt="avatar"
                    />
                    <div className="absolute right-0 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 p-[3px] transition-all duration-500 group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:bg-blue-100/80">
                        <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                                    fill="#0095FF"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
                {/* Badge 1 */}
                <div className="relative  h-fit w-fit rounded-md bg-white p-2 hover:bg-gray-200">
                    <svg width="40px" viewBox="-4.32 -4.32 32.64 32.64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0284C7">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" />
                        <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="#38BDF8" />{' '}
                            <path
                                d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z"
                                fill="#38BDF8"
                            />{' '}
                        </g>
                    </svg>
                    <span className="absolute -right-2 -top-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">12</span>
                </div>
                {/* Badge 2 */}
                <div className="relative  h-fit w-fit rounded-md bg-white p-2 hover:bg-gray-200">
                    <svg width="40px" viewBox="-4.32 -4.32 32.64 32.64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0284C7">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" />
                        <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="#38BDF8" />{' '}
                            <path
                                d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z"
                                fill="#38BDF8"
                            />{' '}
                        </g>
                    </svg>
                    <span className="absolute -right-1 -top-1 h-[14px] w-[14px] rounded-full bg-green-500 "></span>
                </div>
                {/* Badge 3 */}
                <div className="relative  bg-white hover:bg-gray-200 p-2 rounded-md w-fit h-fit">
        <svg width="40px" fill="#0284C7" viewBox="-1.92 -1.92 27.84 27.84" id="home-alt-2" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color" stroke="#0284C7"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" /><g id="SVGRepo_iconCarrier"><path id="primary" d="M20,10V21a1,1,0,0,1-1,1H15.5a1,1,0,0,1-1-1V16.1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10a1,1,0,0,1,.29-.71l7-7a1,1,0,0,1,1.42,0l7,7A1,1,0,0,1,20,10Z" style={{fill: '#38BDF8'}} /></g></svg>
        <span className="absolute -right-2 -bottom-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">12</span>
    </div>
            </div>
        </div>
    );
};

export default ComponentBox;
