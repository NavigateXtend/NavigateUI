'use client';
import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';
import { useState } from 'react';

const codeStr = `const Accordion12 = () => {
    const sliders = [
        { img: 'https://source.unsplash.com/1200x640/?snow-fall', title: 'Winter', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },
        { img: 'https://source.unsplash.com/1200x640/?Spring', title: 'Spring', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },
        { img: 'https://source.unsplash.com/1200x640/?sea-beach', title: 'Summer', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },
        { img: 'https://source.unsplash.com/1200x640/?Autumn', title: 'Autumn', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' }
    ];
    const [isOpen, setIsOpen] = useState(1);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));
    return (
        <div className="flex h-[800px] items-center justify-center gap-4 bg-blue-50">
            {sliders?.map((slide, idx) => (
                <div onClick={() => handleToggle(idx)} key={idx} className={\`\${isOpen == idx ? 'w-[300px] opacity-100 shadow-lg' : 'w-[100px] opacity-70 grayscale'} \${idx % 2 == 0 ? 'translate-y-16' : ''} relative h-[600px] duration-500 ease-in-out\`}>
                    <img className="block h-full w-full rounded-md object-cover shadow-md" src={slide?.img} alt="" />
                    <div className={\`\${isOpen == idx ? 'opacity-100' : 'opacity-0'} absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent duration-500 ease-in-out\`}>
                        <h1 className={\`relative text-center text-2xl text-white/80 \${isOpen == idx ? 'top-[150px] opacity-100' : 'top-[200px] opacity-0'} duration-500 ease-in-out\`}>{slide?.title}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Accordion12;
`;

const Accordion12 = () => {
    const sliders = [
        { img: 'https://source.unsplash.com/1200x640/?snow-fall', title: 'Winter', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },
        { img: 'https://source.unsplash.com/1200x640/?Spring', title: 'Spring', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },
        { img: 'https://source.unsplash.com/1200x640/?sea-beach', title: 'Summer', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },
        { img: 'https://source.unsplash.com/1200x640/?Autumn', title: 'Autumn', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' }
    ];
    const [isOpen, setIsOpen] = useState(1);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx == idx ? null : idx));
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex h-[800px] items-center justify-center gap-4">
                {sliders?.map((slide, idx) => (
                    <div
                        onClick={() => handleToggle(idx)}
                        key={idx}
                        className={`${isOpen == idx ? 'w-[300px] opacity-100 shadow-lg' : 'w-[100px] opacity-70 grayscale'} ${idx % 2 == 0 ? 'translate-y-16' : ''} relative h-[600px] duration-500 ease-in-out`}
                    >
                        <Image height={600} width={300} className="block h-full w-full rounded-md object-cover shadow-md" src={slide?.img} alt="" />
                        <div className={`${isOpen == idx ? 'opacity-100' : 'opacity-0'} absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent duration-500 ease-in-out`}>
                            <h1 className={`relative text-center text-2xl text-white/80 ${isOpen == idx ? 'top-[150px] opacity-100' : 'top-[200px] opacity-0'} duration-500 ease-in-out`}>
                                {slide?.title}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Accordion12;
