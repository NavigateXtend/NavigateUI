const Hero4 = () => {
    return (
        <div>
            <section className="bg-[#FDE047] px-8 py-12">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center flex flex-col space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-black opacity-70 mb-2">#1 PLATFORM FOR JOBS</p>
                        <div className=" text-black  mb-4">
                            <h2 className="lg:text-5xl sm:text-4xl max-w-[800px] mx-auto text-3xl font-bold">
                                {' '}
                                Find Your <span className="text-[#EE7236]">Dream Job</span> That Suit With Exciting Opportunities
                            </h2>

                            <p className="sm:text-base text-sm text-black opacity-70 mb-8 mt-5">
                                Embark on a journey towards your dream career, your ultimate job-finding companion! We've curated
                                <br />a platform that connects talented individuals with exciting opportunities.
                            </p>
                            <div className="flex justify-center items-center sm:flex-row flex-col space-x-4 sm:space-y-0  space-y-3 mb-12">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black h-6 w-6 md:block hidden"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <line x1={2} x2={22} y1={12} y2={12} />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black h-6 w-6  md:block hidden"
                                >
                                    <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <path d="m9 14 2 2 4-4" />
                                </svg>

                                <div className="relative rounded-md shadow-sm lg:w-[400px] sm:w-[300px] w-full ">
                                    <input className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none" placeholder="Job title, Salary, or Companies..." />
                                </div>
                                <button className="inline-flex items-center justify-center  sm:w-auto w-full rounded-md text-sm font-medium  disabled:opacity-50 hover:bg-black/90 h-10 px-4 py-2 bg-black text-white">
                                    Explore Now
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-black h-6 w-6  md:block hidden"
                                >
                                    <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                                    <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                                    <rect width={7} height={5} x={7} y={7} rx={1} />
                                    <rect width={7} height={5} x={10} y={12} rx={1} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center  lg:gap-20 md:gap-10  gap-10 items-center text-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black h-12 w-12 mx-auto"
                            >
                                <rect x={3} y={7} width={18} height={13} rx={2} ry={2} />
                                <path d="M12 13v4m-3-3h6" />
                            </svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">Live Jobs</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">30000+</p>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black h-12 w-12 mx-auto"
                            >
                                <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">Daily Job Post</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">5000+</p>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black h-12 w-12 mx-auto"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <polyline points="16 11 18 13 22 9" />
                            </svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">People Get Hired</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">25000+</p>
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-black h-12 w-12 mx-auto"
                            >
                                <rect x={6} y={8} width={12} height={12} />
                                <rect x={8} y={10} width={2} height={2} />
                                <rect x={14} y={10} width={2} height={2} />
                                <rect x={8} y={14} width={2} height={2} />
                                <rect x={14} y={14} width={2} height={2} />
                                <path d="M12 20v-4h-2v4" />
                            </svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">Companies</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">1000+</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 items-center flex-wrap gap-4 space-x-2">
                        <p className="text-xs font-semibold">Product Manager</p>
                        <p className="text-xs font-semibold">Frontend Dev</p>
                        <p className=" text-xs font-semibold">Data Analyst</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero4;
