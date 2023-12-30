import { useState } from "react";

export const SliderMain = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://source.unsplash.com/600x600/?bedroom",
      tags: "Room",
    },
    {
      img: "https://source.unsplash.com/600x600/?room",
      tags: "Room",
    },
    {
      img: "https://source.unsplash.com/600x600/?livingrooms",
      tags: "Room",
    },
    {
      img: "https://source.unsplash.com/600x600/?livingroom",
      tags: "Room",
    },
    {
      img: "https://source.unsplash.com/600x600/?bedrooms",
      tags: "Room",
    },
  ];

  const nextSlider = () => {
    if (currentSlider === sliders.length - 1) {
      return setCurrentSlider(0);
    }
    return setCurrentSlider(currentSlider + 1);
  };

  return (
    <div className="sm:w-2/3 relative overflow-hidden">
      {/* arrow */}
      <button
        onClick={nextSlider}
        className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-12 h-12 bgWhite "
      >
        <svg
          viewBox="0 0 1024 1024"
          className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>

      {/* slider container */}
      <div
        className={`ease-linear duration-300 flex gap-[2%]`}
        style={{ transform: `translateX(-${currentSlider * 52}%)` }}
      >
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <div
            key={inx}
            className={`${
              currentSlider === inx
                ? "h-[310px] md:h-[480px] lg:h-[580px] "
                : "h-[260px] md:h-[380px] lg:h-[480px]"
            } min-w-[50%] relative duration-200`}
          >
            <img src={slide.img} className="w-full h-full" alt={slide.tags} />
            <div
              className={`absolute bottom-2 md:bottom-6 left-3 md:left-6 bg-[#FFFFFFB8] duration-700 transition p-4 ${
                currentSlider === inx ? "opacity-1" : "opacity-0"
              }`}
            >
              <h4 className="flex items-center md:gap-2 text-sm ">
                {"0" + (inx + 1) + " - " + slide.tags}
              </h4>
              <h2 className="md:text-2xl font-semibold mt-1">Inner Peace</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const Slider2 = () => {
  return (
    <div className="max-w-7xl mx-auto h-[540px] md:h-[670px] px-10 flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="bg-[#FCF8F3] w-full absolute left-0 h-[540px] lg:h-[670px] -z-40"></div>
      <div className="w-full lg:w-1/3 text-center lg:text-left space-y-2 lg:space-y-5 py-5">
        <h1 className="text-2xl lg:text-[40px] font-bold">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-[#616161]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button className="font-bold py-2 lg:py-3 hover:scale-95 duration-300 px-4 lg:px-10 text-white bg-[#B88E2F]">
          Explore More
        </button>
      </div>
      <SliderMain />
    </div>
  );
};
