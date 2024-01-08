import { useEffect, useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `
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

    const nextSlider = () => {
        setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
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
        <CodeBox codeStr={codeStr}>
            <div className="max-w-full min-w-[300px] resizable-code-box  mx-auto h-[240px] md:h-[470px] lg:h-[700px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
                <div className="relative overflow-hidden">
                    {/* dots */}
                    <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
                        {sliders.map((_, inx) => (
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
                        className="ease-linear duration-300 flex flex-col h-[340px] md:h-[670px] transform-gpu relative"
                        style={{
                            transform: `translateY(-${currentSlider * 100}%)`
                        }}
                    >
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <div key={inx} className="min-w-full duration-200">
                                <img src={slide.img} className="w-full h-[340px] md:h-[670px] object-cover" alt={`Slider - ${inx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};
