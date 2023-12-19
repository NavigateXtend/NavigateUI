import slide1 from "/assets/slide1.png";
import slide2 from "/assets/slide2.png";
import slide3 from "/assets/slide3.png";
import { useState } from "react";

export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    { img: slide1, tags: "Bed room" },
    { img: slide2, tags: "Living room" },
    { img: slide3, tags: "Drawing room" },
    { img: slide1, tags: "Drawing room" },
    { img: slide2, tags: "Drawing room" },
    { img: slide3, tags: "Drawing room" },
    { img: slide1, tags: "Drawing room" },
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
        className="absolute right-2 top-1/2 z-50 leading-0 text-2xl w-12 h-12 bg-white rounded-full text-[#b88e2f] shadow-md shadow-gray-400"
      >
        &gt;
      </button>

      {/* slider container */}
      <div
        className={`ease-linear duration-300 flex gap-[2%] transform translate-x-${
          -currentSlider * 52
        }`}
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
            <img src={slide.img} className="w-full h-full" alt="" />
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

export const Slider1 = () => {
  return (
    <div className="max-w-7xl mx-auto h-[540px] md:h-[670px] px-5 flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="bg-[#FCF8F3] w-full absolute left-0 h-[540px] md:h-[670px] -z-40 "></div>
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
      <Slider />
    </div>
  );
};
