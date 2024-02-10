import { Link } from 'react-router-dom';

const Banner = ({ isOpen }) => {
    return (
        <div className={`${isOpen ? 'opacity-30 duration-300' : 'opacity-100 duration-300'}`}>
            <div className="mb-8 mt-14 flex flex-col items-center justify-center px-4 text-center md:my-20 md:px-8">
                <h2 className="max-w-[600px] text-3xl font-semibold leading-[52px] md:text-4xl md:leading-[60px] ">
                    <span className="">
                        <span className="text-[#0095FF]">NavigateUI</span>
                    </span>{' '}
                    - Free Component Library for Tailwind-React Developers
                </h2>
                <p className="mt-4 max-w-[500px] text-base text-gray-600 md:text-lg">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                <div className="mt-6 flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
                    <Link to="/components/accordion" className="flex w-full  gap-2 rounded-md bg-[#0095FF] px-6 py-3 text-white transition duration-300 hover:bg-[#2c6e9c] md:w-auto">
                        <img className="w-6" src="/assets/Component.png" alt="" /> See Components
                    </Link>
                    <Link to="/components/accordion" className="w-full rounded-md bg-gray-200 px-6 py-3  transition duration-300 hover:bg-gray-300 md:w-auto">
                        Documentation
                    </Link>
                </div>
                <div className="mt-8 flex flex-col justify-center space-y-4  md:mt-12 md:flex-row md:space-x-8 md:space-y-0">
                    <div className="card w-full bg-gray-100 bg-gradient-to-r px-14 py-10 md:w-auto">
                        <h3 className="text-xl font-semibold md:text-2xl ">100+ Components</h3>
                        <p className="text-sm text-gray-600 md:text-base">Explore a vast collection of ready-to-use components.</p>
                    </div>
                    <div className="card w-full bg-gray-100 bg-gradient-to-r px-14 py-10 md:w-auto">
                        <h3 className="text-xl font-semibold md:text-2xl ">12 Categories</h3>
                        <p className="text-sm text-gray-600 md:text-base">Organized components for seamless integration.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
