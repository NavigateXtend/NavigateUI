import React from "react";

const Card4 = () => {
  return (
    <div className="px-6 py-6 relative w-[350px] text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
      <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
      <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
      <div className="space-y-6 z-20 relative">
        <h1 className="text-2xl font-bold">Cookies.</h1>
        <p>
          By using this website you automatically accept that we use cookies.
          <a href="#" className="border-b">
            What for?
          </a>
        </p>
        <button className="bg-[#1b8efa] py-2 before:content-['Okay'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Understood!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center  px-6 w-1/2 h-10 relative group">
          {/* <span className="bg-red-500 inset-0 absolute translate-y-0 group-hover:-translate-y-full flex items-center justify-center">
            Understood
          </span>
          <span className="bg-green-400 inset-0 absolute translate-y-full flex items-center justify-center">
            ok
          </span> */}
        </button>
      </div>
    </div>
  );
};

export default Card4;
