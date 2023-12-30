import React from "react";

const Card4 = () => {
  return (
    <div className="px-6 py-6 relative w-[350px] text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF]">
      <span className=" h-[200px] animate-bounce absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[10%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
      <span className=" h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] animate-bounce to-[#4FB5FF]"></span>
      <div
        className="
        space-y-6 z-20 relative"
      >
        <h1 className="text-2xl font-bold">Cookies.</h1>
        <p className=" ">
          By using this website you automatically accept that we use cookies.{" "}
          <a href="#" className="border-b">
            What for?
          </a>
        </p>
        <button className="bg-[#1b8efa] py-2 px-6">Understood</button>
      </div>
    </div>
  );
};

export default Card4;
