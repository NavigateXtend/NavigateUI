import { Link } from 'react-router-dom';

const Banner = ({ isOpen }) => {
    return (
        <div className={`${isOpen ? 'opacity-30 duration-300' : 'opacity-100 duration-300'} `}>
            <div className="mb-8 mt-14 flex flex-col items-center justify-center px-4 text-center md:my-28 md:px-8 ">
                <h2 className="giveLineHeight max-w-[900px] space-y-1 text-2xl font-extrabold leading-[200px] text-[#FFFFFF] sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-[#0095FF]">NavigateUI </span> Free Component Library for Developers
                </h2>
                <p className="mt-4 max-w-[500px] text-base font-medium  text-gray-400 md:text-lg">
                    Navigate to a world of <span className="text-[#0095FF]">free</span>, <span className="text-[#0095FF]">reusable</span>, and highly{' '}
                    <span className="text-[#0095FF]">customizable</span> Tailwind components
                </p>
                <div className="text[12px] mt-6 flex flex-row items-center gap-1 text-[12px] sm:gap-2 sm:text-sm md:gap-3 md:text-base">
                    <Link
                        to="/components/accordion"
                        className="text-nowrap flex w-full flex-nowrap  gap-2 rounded-md bg-[#0095FF] px-2 py-1 text-white transition duration-300 hover:bg-[#2c6e9c]  sm:px-4 sm:py-2 md:w-auto md:px-6 md:py-3"
                    >
                        Components
                    </Link>
                    <Link to="/components/accordion" className="w-full rounded-md bg-gray-200 px-2 py-1 transition duration-300 hover:bg-gray-300 sm:px-4 sm:py-2  md:w-auto  md:px-6 md:py-3">
                        Documentation
                    </Link>
                </div>
                {/* <div className="mt-8 flex flex-col justify-center space-y-4  md:mt-12 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="card w-full bg-gray-100 bg-gradient-to-r px-14 py-10 md:w-auto">
                        <h3 className="text-xl font-semibold md:text-2xl ">100+ Components</h3>
                        <p className="text-sm text-gray-600 md:text-base">Explore a vast collection of ready-to-use components.</p>
                    </div>
                    <div className="card w-full bg-gray-100 bg-gradient-to-r px-14 py-10 md:w-auto">
                        <h3 className="text-xl font-semibold md:text-2xl ">12 Categories</h3>
                        <p className="text-sm text-gray-600 md:text-base">Organized components for seamless integration.</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
