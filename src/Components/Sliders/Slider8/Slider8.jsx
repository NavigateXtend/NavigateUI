import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `
import { useState } from 'react';
export const Slider8 = () => {
    const [currentSlider, setCurrentSlider] = useState(2);

    const sliders = [{img: 'https://source.unsplash.com/1200x640/?snow-fall'},{img: 'https://source.unsplash.com/1200x640/?Spring'},{img: 'https://source.unsplash.com/1200x640/?mountain'},{img: 'https://source.unsplash.com/1200x640/?river'},{img: 'https://source.unsplash.com/1200x640/?Autumn'}];
    const prevSlider = () => {setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliders.length - 1 : currentSlider - 1));};
    const nextSlider = () => {setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));};

    return (
        <CodeBox codeStr={codeStr}>
            <div className="max-w-full min-w-[300px] resizable-code-box  mx-auto h-[240px] md:h-[470px] lg:h-[700px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden border-2 border-black">
                    <div className="absolute w-fit h-fit rotate-90 bottom-1/2 flex gap-5 z-50 px-5">
                        {/* arrow left */}
                        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g></svg>
                        </button>
                        {/* arrow right */}
                        <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path  fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                        </button>
                    </div>
                    {/* dots */}
                    <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                        {sliders.map((_, inx) => (
                            <button
                                key={inx}
                                onClick={() => {
                                    setCurrentSlider(inx);
                                }}
                                className={\`rounded-full duration-300 bg-white \${currentSlider === inx ? 'w-10' : 'w-2'} h-2\`}
                            ></button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div
                        className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative"
                        style={{ transform: \`translateY(-\${currentSlider * 100}%)\` }}
                    >
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <div key={inx} className="min-w-full duration-200">
                                <img src={slide.img} className="w-full h-[340px] md:h-[670px] object-cover" alt={\`Slider - \${inx + 1}\`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

`;

export const Slider8 = () => {
    const [currentSlider, setCurrentSlider] = useState(2);

    const sliders = [
        {
            img: 'https://source.unsplash.com/1200x640/?snow-fall'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?Spring'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?mountain'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?river'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?Autumn'
        }
    ];

    const prevSlider = () => {
        setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliders.length - 1 : currentSlider - 1));
    };
    const nextSlider = () => {
        setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    };

    return (
        <CodeBox codeStr={codeStr}>
            <div className="resizable-code-box mx-auto flex  h-[240px] min-w-[300px] max-w-full flex-col items-center gap-5 overflow-hidden px-10 md:h-[470px] lg:h-[700px] lg:flex-row lg:gap-10">
                <div className="relative overflow-hidden border-2 border-black">
                    <div className="absolute bottom-1/2 z-50 flex h-fit w-fit rotate-90 gap-5 px-5">
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
                    {/* dots */}
                    <div className="absolute bottom-1/2 right-0 z-50 flex h-fit w-fit rotate-90 gap-1 rounded-full">
                        {sliders.map((_, inx) => (
                            <button
                                key={inx}
                                onClick={() => {
                                    setCurrentSlider(inx);
                                }}
                                className={`rounded-full bg-white duration-300 ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}
                            ></button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div className="relative flex h-[340px] transform-gpu flex-col duration-300 ease-linear md:h-[670px]" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <div key={inx} className="min-w-full duration-200">
                                <img src={slide.img} className="h-[340px] w-full object-cover md:h-[670px]" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};
