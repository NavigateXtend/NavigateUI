import { Link } from 'react-router-dom';

const Banner = ({ isOpen }) => {
    return (
<div className={`${isOpen ? 'opacity-30 duration-300' : 'opacity-100 duration-300'}`}>
    <div className="flex flex-col items-center justify-center text-center mt-14 mb-8 md:my-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold leading-[52px] md:leading-[60px] max-w-[600px] ">
            <span className="">
                <span className="text-[#0095FF]">NavigateUI</span>
            </span>{' '}
            - Free Component Library for Tailwind-React Developers
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-[500px]">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
        <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
            <Link to="/components/accordion" className="w-full flex  gap-2 md:w-auto px-6 py-3 bg-[#0095FF] text-white rounded-md hover:bg-[#2c6e9c] transition duration-300">
                <img className="w-6" src="/assets/Component.png" alt="" /> See Components
            </Link>
            <Link to="/components/accordion" className="w-full md:w-auto px-6 py-3 bg-gray-200  rounded-md hover:bg-gray-300 transition duration-300">
                Documentation
            </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-8  md:mt-12 space-y-4 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-auto card px-14 py-10 bg-gradient-to-r bg-gray-100">
                <h3 className="text-xl md:text-2xl font-semibold ">100+ Components</h3>
                <p className="text-sm md:text-base text-gray-600">Explore a vast collection of ready-to-use components.</p>
            </div>
            <div className="w-full md:w-auto card px-14 py-10 bg-gradient-to-r bg-gray-100">
                <h3 className="text-xl md:text-2xl font-semibold ">12 Categories</h3>
                <p className="text-sm md:text-base text-gray-600">Organized components for seamless integration.</p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Banner;
