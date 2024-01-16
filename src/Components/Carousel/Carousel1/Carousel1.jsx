import { useEffect, useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `import { useEffect, useState } from "react";

export const Carousel1 = () => {
const [currentSlider, setCurrentSlider] = useState(0);
const sliderImages = [{img: "https://source.unsplash.com/1200x1200/?nature/?1",}, {img: "https://source.unsplash.com/1200x1200/?nature/?2",}, {img: "https://source.unsplash.com/1200x1200/?nature/?3",}, {img: "https://source.unsplash.com/1200x1200/?nature/?4",},];

const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);

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
   <div className="max-w-7xl mx-auto h-[340px] md:h-[670px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          {/* arrow left */}
          <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
          </button>
          {/* arrow right */}
          <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
          </button>
        </div>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => <button key={inx} onClick={() => {setCurrentSlider(inx);}} className={\`rounded-full duration-300 bg-white \${currentSlider === inx ? "w-10" : "w-2"} h-2\`}></button>))}
        </div>
        {/* slider container */}
        <div className="ease-linear duration-300 flex transform-gpu relative" style={{transform: \`translateX(-\${currentSlider * 100}%)\`,}>
          {/* sliders */}
          {sliderImages.map((slide, inx) => <div key={inx} className="min-w-full duration-200"><img src={slide.img} className="w-full h-72 sm:h-96 md:h-[670px] object-cover" alt={\`Slider - \${inx + 1}\`}/></div>)}
        </div>
      </div>
    </div>
);
};
`;
export const Carousel1 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliderImages = [
        'https://source.unsplash.com/1200x640/?nature',
        'https://source.unsplash.com/1200x640/?hill',
        'https://source.unsplash.com/1200x640/?mountain',
        'https://source.unsplash.com/1200x640/?river',
        'https://source.unsplash.com/1200x640/?sea'
    ];

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1));

    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1));
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
        <CodeBox codeStr={codeStr}>
            <div className="max-w-full min-w-[300px] resizable-code-box  mx-auto h-[240px] md:h-[470px] lg:h-[700px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden">
                    <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
                        <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
                    {/* dots */}
                    <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                        {sliderImages.map((_, inx) => (
                            <button
                                key={inx}
                                onClick={() => {
                                    setCurrentSlider(inx);
                                }}
                                className={`rounded-full duration-300 bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}
                            ></button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div
                        className="ease-linear duration-300 flex transform-gpu relative"
                        style={{
                            transform: `translateX(-${currentSlider * 100}%)`
                        }}
                    >
                        {/* sliders */}
                        {sliderImages.map((_, inx) => (
                            <div
                                key={inx}
                                className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:absolute before:flex before:justify-center before:items-center before:text-3xl before:text-black/40 before:-z-10 before:inset-0 relative"
                            >
                                <img src={_} className="w-full h-72 sm:h-96 md:h-[670px] object-cover" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};
