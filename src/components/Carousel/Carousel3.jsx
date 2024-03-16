'use client';
import { useState } from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `import { useState } from "react";

export const Carousel3 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [{img: "https://source.unsplash.com/600x600/?bedroom",}, {img: "https://source.unsplash.com/600x600/?room",}, {img: "https://source.unsplash.com/600x600/?livingrooms",}, {img: "https://source.unsplash.com/600x600/?livingroom",}, {img: "https://source.unsplash.com/600x600/?bedrooms",},];

  const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
  const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
  return (
        <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
      <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
        {/* arrow left */}
        <button onClick={prevSlider}className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
        {/* arrow right */}
        <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
          <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
        </button>
      </div>
      {/* slider container */}
      <div className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
        style={{ transform: \`translateX(-\${currentSlider * 50}%)\` }}>
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <div key={inx} 
            className={\`\${currentSlider === inx ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]" : "h-[220px] sm:h-[260px] md:h-[380px] lg:h-[480px] scale-95 opacity-40"} min-w-[50%] relative duration-200\`}
            style={{perspective: "200px"}}>
            <img src={slide.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={slide.tags} style={{ transform: \`\${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}\`, transformStyle: "preserve-3d",}}/>
          </div>
        ))}
      </div>
    </div>
  );
};
`;

export const Carousel3 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: 'https://source.unsplash.com/600x600/?bedroom'
    },
    {
      img: 'https://source.unsplash.com/600x600/?room'
    },
    {
      img: 'https://source.unsplash.com/600x600/?livingrooms'
    },
    {
      img: 'https://source.unsplash.com/600x600/?livingroom'
    },
    {
      img: 'https://source.unsplash.com/600x600/?bedrooms'
    }
  ];
  const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliders.length - 1 : currentSlider - 1));

  const nextSlider = () => {
    setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
  };

  return (
    <CP code={code}>
      <div className="relative mx-auto flex h-[540px] max-w-6xl flex-col items-center gap-5 overflow-hidden md:h-[670px] lg:gap-10 xl:flex-row">
        <div className="absolute z-50 flex h-full w-full items-center justify-between px-5">
          {/* arrow left */}
          <button onClick={prevSlider} className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-8 md:w-8">
            <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button onClick={nextSlider} className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-8 md:w-8">
            <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
              <g strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* slider container */}
        <div className="relative ml-auto flex h-[540px] w-2/3 items-center duration-300 ease-linear md:h-[670px]" style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <div
              key={inx}
              className={`${
                currentSlider === inx ? 'h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]' : 'h-[220px] scale-95 opacity-40 sm:h-[260px] md:h-[380px] lg:h-[480px]'
              } relative min-w-[50%] duration-200`}
              style={{
                perspective: '200px'
              }}
            >
              <Image
                width={600}
                height={600}
                src={slide.img}
                className="h-full w-full rounded-lg bg-gray-900 duration-300"
                alt={slide.tags}
                style={{
                  transform: `${currentSlider - 1 === inx ? 'rotateY(4deg)' : currentSlider + 1 === inx ? 'rotateY(-4deg)' : ''}`,
                  transformStyle: 'preserve-3d'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </CP>
  );
};
