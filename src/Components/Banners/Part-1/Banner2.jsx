import React from "react";

const Banner2 = () => {
  return (
    <div>
      <div className="bg-[url('https://source.unsplash.com/random/?tech')] bg-cover bg-fixed max-w-7xl h-[700px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white">
        <div className="absolute z-20 flex justify-center items-center inset-0 mx-auto">
          <div className="w-1/2">
            <h1 className="text-3xl mb-3">Escape to Serenity</h1>
            <p className="w-2/3">
              A Symphony of Tranquility. Experience the perfect blend of
              relaxation and excitement, surrounded by the wonders of nature.
            </p>
            <button className="bg-white text-black p-2 mt-5 font-bold">
              Show Now
            </button>
          </div>
          <div className="relative w-[420px] px-3 h-[420px] rounded-lg  before:absolute before:w-20 before:h-20 before:border-8  before:border-dashed before:rounded- hover:before:animate-[spin_8s_linear_infinite] before:-left-10 before:-top-10 after:absolute after:w-20 after:h-20 after:border-8  after:border-dashed after:rounded- hover:after:animate-[spin_8s_linear_infinite] after:-right-10 after:-bottom-10 group">
            <img
              src="https://source.unsplash.com/200x200/?techs"
              alt="img"
              className="rounded-lg absolute top-0 left-0 z-20 bg-gray-900 w-[200px] h-[200px]   group-hover:scale-105 duration-300"
            />
            <img
              src="https://source.unsplash.com/200x200/?laptop"
              alt="img"
              className="rounded-lg absolute right-0 bottom-0 z-20 bg-gray-900 w-[200px] h-[200px]   group-hover:scale-105 duration-300"
            />
            <img
              src="https://source.unsplash.com/200x200/?mobile"
              alt="img"
              className="rounded-lg absolute left-0 bottom-0 z-20 bg-gray-900 w-[200px] h-[200px]   group-hover:scale-105 duration-300"
            />
            <img
              src="https://source.unsplash.com/200x200/?electronics"
              alt="img"
              className="rounded-lg absolute right-0 top-0 z-20 bg-gray-900 w-[200px] h-[200px]   group-hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
