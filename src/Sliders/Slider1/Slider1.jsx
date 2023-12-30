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
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);
  return (
    <div className="max-w-7xl mx-auto h-[540px] md:h-[670px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
      <div className="relative overflow-hidden">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute flex justify-center items-center left-2 top-1/2 z-50 bg-white rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
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
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute flex justify-center items-center right-2 top-1/2 bg-white rounded-full z-50 w-12 h-12"
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
        {/* dots */}

        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full">
          {sliders.map((s, inx) => (
            <button
              key={inx}
              onClick={() => {
                setCurrentSlider(inx);
              }}
              className={`rounded-full duration-300 bg-sky-400 border-[3px] border-white ${
                currentSlider === inx ? "w-10" : "w-3"
              } h-3`}
            ></button>
          ))}
        </div>

        {/* slider container */}
        <div
          className={`ease-linear duration-300 flex transform-gpu relative`}
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div key={inx} className={`min-w-full duration-200`}>
              <img
                src={slide.img}
                className="w-full h-[540px] md:h-[670px] object-cover"
                alt={`Slider - ${inx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
