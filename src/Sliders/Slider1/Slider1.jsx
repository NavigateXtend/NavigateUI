import { useEffect, useState } from "react";

export const Slider1 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://source.unsplash.com/1200x1200/?nature/?1",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?nature/?2",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?nature/?3",
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);
  return (
    <div className="maxW-7xl mx-auto h-[540px] md:h-[670px] px-10 flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={prevSlider}
          className="absolute flex justify-center items-center left-2 top-1/2 z-50 bg-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bgWhite "
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
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
          className={`ease-linear transform duration-300 flex`}
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
            animation: ` 1s ease infinite`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div key={inx} className={`min-w-full relative duration-200`}>
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt={`Slider - ${inx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
