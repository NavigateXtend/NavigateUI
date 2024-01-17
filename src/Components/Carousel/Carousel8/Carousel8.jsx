import { useEffect, useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `
import { useState } from 'react';
export const Carousel8 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = ['https://source.unsplash.com/1200x640/?snow-fall','https://source.unsplash.com/1200x640/?Spring','https://source.unsplash.com/1200x640/?mountain','https://source.unsplash.com/1200x640/?river','https://source.unsplash.com/1200x640/?Autumn'];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <CodeBox codeStr={codeStr}>
            <div className="w-full mx-auto h-[240px] md:h-[470px] lg:h-[700px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden">
                    {/* dots */}
                    <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                        {sliders.map((_, inx) => (
                            <button key={inx} onClick={() => setCurrentSlider(inx)}
                                className={\`rounded-full duration-300 bg-white \${currentSlider === inx ? 'w-10' : 'w-2'} h-2\`}>
                            </button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative" style={{ transform: \`translateY(-\${currentSlider * 100}%)\` }}>
                        {/* sliders */}
                        {sliders.map((_, inx) => (
                            <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
                                <img src={_} className="w-full h-[340px] md:h-[670px] object-cover" alt={\`Slider - \${inx + 1}\`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};
`;

export const Carousel8 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        'https://source.unsplash.com/1200x640/?snow-fall',
        'https://source.unsplash.com/1200x640/?Spring',
        'https://source.unsplash.com/1200x640/?mountain',
        'https://source.unsplash.com/1200x640/?river',
        'https://source.unsplash.com/1200x640/?Autumn'
    ];
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <CodeBox codeStr={codeStr}>
            <div className="min-w-[100%] mx-auto h-full md:h-[470px] lg:h-[700px]">
                <div className="relative overflow-hidden">
                    {/* dots */}
                    <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                        {sliders.map((_, inx) => (
                            <button key={inx} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-300 bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}></button>
                        ))}
                    </div>
                    {/* slider container */}
                    <div className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
                        {/* sliders */}
                        {sliders.map((_, inx) => (
                            <div
                                key={inx}
                                className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative"
                            >
                                <img src={_} className="w-full h-[340px] md:h-[670px] object-cover" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};
