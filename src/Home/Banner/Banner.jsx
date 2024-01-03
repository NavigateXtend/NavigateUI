import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      {/* <div className="flex justify-center items-center flex-col">
        <h2 className="text-[#1F2937] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] flex justify-center  font-extrabold  text-center max-w-[900px] mb-[20px] lg:mt-[120px] md:mt-[70px] mt-[50px]  ">
          Free Task Management Software <br /> without any limits
        </h2>
        <p className=" md:text-lg sm:text-base text-sm max-w-[750px] px-5 text-center flex justify-center mb-[20px]">
          Manage projects and tasks, collaborate with teammates, and status
          reports at a glance with just one click
        </p>
      </div>

      <div className="flex justify-center items-center">
        <button className="bg-gradient-to-r flex items-center justify-center gap-2  hover:from-teal-700 hover:to-blue-600 from-teal-600 to-blue-500  font-semibold py-2 px-6 lg:text-xl text-lg mb-4 rounded-md shadow-md hover:shadow-lg">
          Get Started . It's Free
        </button>
      </div>
      <p className=" text-center md:text-base text-sm">
        Unlimited Users . Unlimited Task . Free Forever
      </p>
      <div className="max-w-[1000px]  mt-10 mx-auto xl:px-0 px-4">
        <img className="w-full h-full" src="/images/banner.png" alt="" />
      </div> */}
<div className="flex flex-col items-center justify-center text-center mt-14 mb-8 md:my-20 px-4 md:px-0">
  <h2 className="text-3xl md:text-4xl font-semibold leading-[52px] md:leading-[60px] max-w-[600px] text-gray-800">
    <span className="">
      <span className="text-[#0095FF]">UnifyUI</span>
    </span> - Free Component Library for Tailwind-React Developers
  </h2>
  <p className="mt-4 text-base md:text-lg text-gray-600 max-w-[500px]">
    Elevate your React projects with beautifully crafted components designed for TailwindCSS.
  </p>
  <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center md:items-start">
    <Link to="/components/button" className="w-full flex  gap-2 md:w-auto px-6 py-3 bg-[#0095FF] text-white rounded-md hover:bg-[#2c6e9c] transition duration-300">
     <img className="w-6" src="/assets/Component.png" alt="" /> See Components 
    </Link>
    <Link to="/components/button" className="w-full md:w-auto px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300">
      Documentation
    </Link>
  </div>
  <div className="flex flex-col md:flex-row justify-center mt-8  md:mt-12 space-y-4 md:space-y-0 md:space-x-8">
  <div className="w-full md:w-auto card px-14 py-10 bg-gray-100">
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">200 Components</h3>
    <p className="text-sm md:text-base text-gray-600">Explore a vast collection of ready-to-use components.</p>
  </div>
  <div className="w-full md:w-auto card px-14 py-10 bg-gray-100">
    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">7 Categories</h3>
    <p className="text-sm md:text-base text-gray-600">Organized components for seamless integration.</p>
  </div>
</div>
</div>


    </div>
  );
};

export default Banner;
