import { useState } from "react";

export const Slider2 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://source.unsplash.com/1200x1200/?bedroom?1",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?bedroom?2",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?bedroom?3",
    },
  ];

  const nextSlider = () => {
    if (currentSlider === sliders.length - 1) {
      return setCurrentSlider(0);
    }
    return setCurrentSlider(currentSlider + 1);
  };
  return (
    <div className="max-w-7xl mx-auto h-[540px] md:h-[670px] px-10 flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <button
          onClick={nextSlider}
          className="absolute right-2 top-1/2 z-50 leading-0 text-2xl w-12 h-12 bg-white rounded-full text-[#b88e2f] shadow-md shadow-gray-400"
        >
          &gt;
        </button>

        {/* slider container */}
        <div
          className={`ease-linear duration-300 flex gap-[2%]`}
          style={{ transform: `translateX(-${currentSlider * 102}%)` }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div key={inx} className={`min-w-full relative duration-200`}>
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
    </div>
  );
};
