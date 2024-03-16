import React from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `const Hero5 = () => {
    return (
        <div className="flex items-center justify-center border border-black w-full h-[80vh] bg-gradient-to-tr from-black via-black/90 to-black">
            <div className="flex flex-col items-center my-10 text-white space-y-8">
                {/* featured div  */}
                <div className="flex items-center gap-4 bg-gradient-to-t from-black to-white/10 py-2 px-6 rounded-lg">
                    <div className=" w-8 h-8 text-black text-2xl font-semibold bg-white flex justify-center items-center rounded-full">P</div>
                    <div>
                        <p className="text-gray-400 text-sm">Featured on</p>
                        <p className="text-white font-medium">Product Hunt</p>
                    </div>
                </div>
                {/* header  */}
                <h1 className="text-5xl font-semibold text-white text-center leading-[65px] ">
                    Supercharge your <span className="text-[#D85D33]">creativity</span> <br /> with our BrainStorming Assistant
                </h1>
                {/* description  */}
                <p className="max-w-[58%] mx-auto text-center">
                    Turn your ideas into amazing plans <span className="text-gray-400">effortlessly with Navigate UI. Its your go to companion for create exploration</span>
                </p>
                {/* people who use navigateUI  */}
                <div className="flex items-center py-4 pl-4 bg-gradient-to-tr from-black via-white/10 to-black border border-white/10 rounded-xl">
                    <div className="w-14 h-14 bg-transparent  rounded-full border-[3px] border-[#191919]">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?people" alt="avatar navigate ui" />
                    </div>
                    <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?kid" alt="avatar navigate ui" />
                    </div>
                    <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?male" alt="avatar navigate ui" />
                    </div>
                    <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                        <img className="w-full h-full rounded-full" src="https://source.unsplash.com/64x64/?female" alt="avatar navigate ui" />
                    </div>

                    <div className="relative -left-5">
                        <p className="text-lg text-white">420+</p>
                        <p className="text-sm text-gray-400">people already using navigateUI</p>
                    </div>
                </div>
                {/* buttons  */}
                <div className="flex flex-wrap gap-10 items-center py-4">
                    <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-b from-[#ff8863] to-[#E83E0D] text-white text-lg font-medium rounded-lg">
                        Try for free{' '}<svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">                              <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="white"></path></g></svg>
                    </button>
                    <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
                        View Pricing{' '}<svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">                               <path d="M12 3V21M15.679 6.63439C14.063 4.2691 7.94541 4.02196 7.94541 8.16745C7.94541 12.3129 16.7524 10.33 16.2439 15.2118C15.8199 19.2823 9.19299 19.3384 7.21094 16.0891" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero5;`;

const Hero5 = () => {
  return (
    <CP code={code}>
      <div className="flex h-[80vh] w-full items-center justify-center border border-black bg-gradient-to-tr from-black via-black/90 to-black">
        <div className="my-10 flex flex-col items-center space-y-8 text-white">
          <div className="flex items-center gap-4 rounded-lg bg-gradient-to-t from-black to-white/10 px-6 py-2">
            <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-white text-2xl font-semibold text-black">P</div>
            {/* featured div  */}
            <div>
              <p className="text-sm text-gray-400">Featured on</p>
              <p className="font-medium text-white">Product Hunt</p>
            </div>
          </div>
          {/* header  */}
          <h1 className="text-center text-5xl font-semibold leading-[65px] text-white ">
            Supercharge your <span className="text-[#D85D33]">creativity</span> <br /> with our BrainStorming Assistant
          </h1>
          {/* description  */}
          <p className="mx-auto max-w-[58%] text-center">
            Turn your ideas into amazing plans <span className="text-gray-400">effortlessly with Navigate UI. Its your go to companion for create exploration</span>
          </p>
          {/* people who use navigateUI  */}
          <div className="flex items-center rounded-xl border border-white/10 bg-gradient-to-tr from-black via-white/10 to-black py-4 pl-4">
            <div className="h-14 w-14 rounded-full  border-[3px] border-[#191919] bg-transparent">
              <Image width={64} height={64} className="h-full w-full rounded-full" src="https://source.unsplash.com/64x64/?people" alt="avatar navigate ui" />
            </div>
            <div className="relative -left-5 h-14  w-14 rounded-full border-[3px] border-[#191919] bg-[#191919]">
              <Image width={64} height={64} className="h-full w-full rounded-full" src="https://source.unsplash.com/64x64/?kid" alt="avatar navigate ui" />
            </div>
            <div className="relative -left-10 h-14  w-14 rounded-full border-[3px]  border-[#191919] bg-[#191919]">
              <Image width={64} height={64} className="h-full w-full rounded-full" src="https://source.unsplash.com/64x64/?male" alt="avatar navigate ui" />
            </div>
            <div className="relative -left-[60px] h-14  w-14 rounded-full border-[3px]  border-[#191919] bg-[#191919]">
              <Image width={64} height={64} className="h-full w-full rounded-full" src="https://source.unsplash.com/64x64/?female" alt="avatar navigate ui" />
            </div>

            <div className="relative -left-5">
              <p className="text-lg text-white">420+</p>
              <p className="text-sm text-gray-400">people already using navigateUI</p>
            </div>
          </div>
          {/* buttons  */}
          <div className="flex flex-wrap items-center gap-10 py-4">
            <button
              className="flex items-center gap-4 rounded-lg bg-gradient-to-b from-[#ff8863] to-[#E83E0D]
                  px-8 py-3 text-lg font-medium text-white"
            >
              Try for free{' '}
              <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
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
            <button className="flex items-center gap-4 rounded-lg bg-gradient-to-t from-black to-white/10 px-8 py-3 text-lg font-medium text-white">
              View Pricing{' '}
              <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
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
    </CP>
  );
};

export default Hero5;
