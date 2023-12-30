import React from "react";

const Banner1 = () => {
  return (
    <div className="bg-[url('https://source.unsplash.com/random')] bg-cover bg-fixed max-w-7xl h-[700px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white">
      <div className="absolute z-20 flex flex-col justify-center items-center inset-0 w-1/2 mx-auto text-center">
        <h1 className="text-3xl mb-3">Escape to Serenity</h1>
        <p>
          A Symphony of Tranquility. Experience the perfect blend of relaxation
          and excitement, surrounded by the wonders of nature.
        </p>
      </div>
    </div>
  );
};

export default Banner1;
