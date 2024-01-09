import { useEffect, useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `
import { useEffect, useState } from 'react';

export const Slider7 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const sliderImages = [ {img: 'https://source.unsplash.com/600x600/?nature/?1'},{img: 'https://source.unsplash.com/600x600/?nature/?3'},{img: 'https://source.unsplash.com/600x600/?nature/?5'},{img: 'https://source.unsplash.com/600x600/?nature/?2'},{img: 'https://source.unsplash.com/600x600/?nature/?4'}];
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => { nextSlider()}, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    return (
            <div className="max-w-full min-w-[300px] resizable-code-box  mx-auto h-[240px] md:h-[470px] lg:h-[700px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden">
                    <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF"d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                        </button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                        </button>
                    </div>
                    {/* slider container */}
                    <div className="ease-linear duration-300 flex transform-gpu relative snap-center"
                        style={{transform: \`translateX(-\${currentSlider * 50}%)\`}}>
                        {/* sliders */}
                        {sliderImages.map((slide, inx) => (
                            <img key={inx} src={slide.img} className="min-w-[50%] h-[200px] md:h-[470px] object-cover border-8 border-transparent" alt={\`Slider - \${inx + 1}\`} />
                        ))}
                    </div>
                </div>
            </div>
    );
};

`;


export const Slider7 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliderImages = [
        {
            img: 'https://source.unsplash.com/600x600/?nature/?1'
        },
        {
            img: 'https://source.unsplash.com/600x600/?nature/?3'
        },
        {
            img: 'https://source.unsplash.com/600x600/?nature/?5'
        },
        {
            img: 'https://source.unsplash.com/600x600/?nature/?2'
        },
        {
            img: 'https://source.unsplash.com/600x600/?nature/?4'
        }
    ];

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 2 : currentSlider - 1));

    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 2 ? 0 : currentSlider + 1));
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
            <div className="resizable-code-box mx-auto flex  h-[240px] min-w-[300px] max-w-full flex-col items-center gap-5 overflow-hidden px-10 md:h-[470px] lg:h-[700px] lg:flex-row lg:gap-10">
                <div className="relative overflow-hidden">
                    <div className="absolute z-50 flex h-full w-full items-center justify-between px-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/30 md:h-8 md:w-8">
                            <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000">
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
                        <button onClick={nextSlider} className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/30 md:h-8 md:w-8">
                            <svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)">
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
                    {/* slider container */}
                    <div
                        className="relative flex transform-gpu snap-center duration-300 ease-linear"
                        style={{
                            transform: `translateX(-${currentSlider * 50}%)`
                        }}
                    >
                        {/* sliders */}
                        {sliderImages.map((slide, inx) => (
                            <img key={inx} src={slide.img} className="h-[200px] min-w-[50%] border-8 border-transparent object-cover md:h-[470px]" alt={`Slider - ${inx + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};
