import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const Hero5 = () => {
    return (
        <div data-navigateUI="hero-section" className="w-full flex items-center justify-center bg-gradient-to-tr from-black via-black/90 to-black ">
            <div className="flex flex-col items-center text-white px-8 md:px-4 my-10 space-y-6 lg:space-y-8">
                <div className="flex items-center gap-4 py-2 px-6 bg-gradient-to-t from-black to-white/10 rounded-lg">
                    <div className="w-8 h-8 text-black text-2xl font-semibold bg-white flex justify-center items-center rounded-full">P</div>
                    {/* featured div  */}
                    <div>
                        <p className="text-gray-400 text-sm">Featured on</p>
                        <p className="text-white font-medium">Product Hunt</p>
                    </div>
                </div>
                {/* header  */}
                <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold md:leading-[55px] lg:leading-[65px]">
                    Supercharge your <span className="text-[#D85D33]">creativity</span> with our BrainStorming Assistant
                </h1>
                {/* description  */}
                <p className="md:max-w-[58%] mx-auto text-center text-sm md:text-base">
                    Turn your ideas into amazing plans <span className="text-gray-400">effortlessly with Navigate UI. Its your go to companion for create exploration</span>
                </p>
                {/* people who use navigateUI  */}
                <div className="flex items-center py-2 px-2 md:py-4 md:px-6 bg-gradient-to-tr from-black via-white/10 to-black border border-white/10 rounded-xl">
                    <div className="w-28 md:w-32 flex items-center relative">
                        <div className="w-10 h-10 bg-transparent rounded-full border-[3px] border-[#191919] absolute left-0">
                            <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?people" alt="" />
                        </div>
                        <div className="w-10 h-10 bg-[#191919] rounded-full border-[3px] border-[#191919] absolute left-5">
                            <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?kid" alt="" />
                        </div>
                        <div className="w-10 h-10 bg-[#191919] rounded-full border-[3px] border-[#191919]  absolute left-10">
                            <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?male" alt="" />
                        </div>
                        <div className="w-10 h-10 bg-[#191919] rounded-full border-[3px] border-[#191919]  absolute left-[60px]">
                            <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?female" alt="" />
                        </div>
                    </div>
                    <div className="w-32 md:w-36">
                        <p className="text-lg text-white">420+</p>
                        <p className="text-sm text-gray-400">people already using navigateUI</p>
                    </div>
                </div>
                {/* buttons  */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-10 items-center py-4">
                    <button className="flex items-center px-8 py-3 bg-gradient-to-b from-[#ff8863] to-[#E83E0D] text-white text-lg font-medium rounded-lg">Try for free <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="white"></path></g></svg></button>
                    <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">View Pricing <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></button>
                </div>
            </div>
        </div>
    );
};

export default Hero5;`;

const Hero5 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div data-navigateUI="hero-section" className="w-full flex items-center justify-center bg-gradient-to-tr from-black via-black/90 to-black ">
                <div className="flex flex-col items-center text-white px-8 md:px-4 my-10 space-y-6 lg:space-y-8">
                    <div className="flex items-center gap-4 py-2 px-6 bg-gradient-to-t from-black to-white/10 rounded-lg">
                        <div className="w-8 h-8 text-black text-2xl font-semibold bg-white flex justify-center items-center rounded-full">P</div>
                        {/* featured div  */}
                        <div>
                            <p className="text-gray-400 text-sm">Featured on</p>
                            <p className="text-white font-medium">Product Hunt</p>
                        </div>
                    </div>
                    {/* header  */}
                    <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold md:leading-[55px] lg:leading-[65px]">
                        Supercharge your <span className="text-[#D85D33]">creativity</span> with our BrainStorming Assistant
                    </h1>
                    {/* description  */}
                    <p className="md:max-w-[58%] mx-auto text-center text-sm md:text-base">
                        Turn your ideas into amazing plans <span className="text-gray-400">effortlessly with Navigate UI. Its your go to companion for create exploration</span>
                    </p>
                    {/* people who use navigateUI  */}
                    <div className="flex items-center py-2 px-2 md:py-4 md:px-6 bg-gradient-to-tr from-black via-white/10 to-black border border-white/10 rounded-xl">
                        <div className="w-28 md:w-32 flex items-center relative">
                            <div className="w-10 h-10 bg-transparent rounded-full border-[3px] border-[#191919] absolute left-0">
                                <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?people" alt="" />
                            </div>
                            <div className="w-10 h-10 bg-[#191919] rounded-full border-[3px] border-[#191919] absolute left-5">
                                <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?kid" alt="" />
                            </div>
                            <div className="w-10 h-10 bg-[#191919] rounded-full border-[3px] border-[#191919]  absolute left-10">
                                <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?male" alt="" />
                            </div>
                            <div className="w-10 h-10 bg-[#191919] rounded-full border-[3px] border-[#191919]  absolute left-[60px]">
                                <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?female" alt="" />
                            </div>
                        </div>
                        <div className="w-32 md:w-36">
                            <p className="text-lg text-white">420+</p>
                            <p className="text-sm text-gray-400">people already using navigateUI</p>
                        </div>
                    </div>
                    {/* buttons  */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-10 items-center py-4">
                        <button
                            className="flex items-center px-8 py-3 bg-gradient-to-b from-[#ff8863]
                  to-[#E83E0D] text-white text-lg font-medium rounded-lg"
                        >
                            Try for free{' '}
                            <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                        fill="white"
                                    ></path>{' '}
                                </g>
                            </svg>
                        </button>
                        <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
                            View Pricing{' '}
                            <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>{' '}
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Hero5;
