import { useState } from "react";

export const Slider1 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://source.unsplash.com/1200x1200/?beach",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?beach",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?beach",
    },
  ];

  const prevSlider = () => {
    if (currentSlider === 0) {
      return setCurrentSlider(sliders.length - 1);
    }
    return setCurrentSlider(currentSlider - 1);
  };
  const nextSlider = () => {
    if (currentSlider === sliders.length - 1) {
      return setCurrentSlider(0);
    }
    return setCurrentSlider(currentSlider + 1);
  };
  return (
    <div className="maxW-7xl mx-auto h-[540px] md:h-[670px] px-10 flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={prevSlider}
          className="absolute left-2 top-1/2 z-50 bg-white rounded-full w-12 h-12 bgWhite "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={nextSlider}
          className="absolute right-2 top-1/2 bg-white rounded-full z-50 w-12 h-12 bgWhite "
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>

        {/* slider container */}
        <div
          className={`ease-linear transform duration-300 flex`}
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div key={inx} className={`min-w-full relative duration-200`}>
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
