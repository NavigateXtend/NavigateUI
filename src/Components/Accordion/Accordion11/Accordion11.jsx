import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';
const codeStr = `import { useState } from 'react';
const Accordion11 = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));
  const sliders = [{img: "https://source.unsplash.com/1200x640/?snow-fall",title: "Winter",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/1200x640/?Spring",title: "Spring",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/1200x640/?sea-beach",title: "Summer",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},{img: "https://source.unsplash.com/1200x640/?Autumn",title: "Autumn",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
  
  return (
        <div className="flex justify-center gap-1 md:gap-4">
            {/* map  */}
            {sliders.map((slide, idx) => (
                <div onClick={() => toggle({ currentIdx: idx })} className={\`relative h-[600px] rounded-3xl bg-gray-300 duration-500 ease-in-out \${isOpen == idx ? ' w-[300px] md:w-[400px] ' : 'w-[100px]'}\`} key={idx}>
                    {/* main image  */}
                    <img className="h-full rounded-3xl object-cover" src={slide.img} alt="" />
                    <img className={\`absolute bottom-5 border border-white transition-all duration-500 md:border-2 \${isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'} h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]\`} src={slide.img} alt=""/>
                    <div className={\`absolute bottom-5  left-[45%] text-white transition-all duration-300 md:left-[100px] \${isOpen === idx ? 'opacity-100' : 'opacity-0 '}\`}>
                        <h3 className="text-lg font-semibold md:text-3xl">Status</h3>
                        <p className="text-sm md:text-xl">{slide.title}</p>
                    </div>
                </div>
            ))}
        </div>
  )};
  export default Accordion11;
  `;

const Accordion11 = () => {
    const [isOpen, setIsOpen] = useState(null);

    const toggle = ({ currentIdx }) => setIsOpen((prevIdx) => (prevIdx == currentIdx ? null : currentIdx));

    const sliders = [
        {
            img: 'https://source.unsplash.com/1200x640/?snow-fall',
            title: 'Winter',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?Spring',
            title: 'Spring',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?sea-beach',
            title: 'Summer',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        },
        {
            img: 'https://source.unsplash.com/1200x640/?Autumn',
            title: 'Autumn',
            des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.'
        }
    ];
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex justify-center gap-1 md:gap-4">
                {/* map  */}
                {sliders.map((slide, idx) => (
                    <div
                        onClick={() => toggle({ currentIdx: idx })}
                        className={`relative h-[600px] rounded-3xl bg-gray-300 duration-500 ease-in-out ${isOpen == idx ? ' w-[300px] md:w-[400px] ' : 'w-[100px]'}`}
                        key={idx}
                    >
                        {/* main image  */}
                        <img className="h-full rounded-3xl object-cover" src={slide.img} alt="" />
                        <img
                            className={`absolute bottom-5 border border-white transition-all duration-500 md:border-2 ${
                                isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'
                            } h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]`}
                            src={slide.img}
                            alt=""
                        />
                        <div className={`absolute bottom-5  left-[45%] text-white transition-all duration-300 md:left-[100px] ${isOpen === idx ? 'opacity-100' : 'opacity-0 '}`}>
                            <h3 className="text-lg font-semibold md:text-3xl">Status</h3>
                            <p className="text-sm md:text-xl">{slide.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Accordion11;
